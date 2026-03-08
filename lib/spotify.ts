const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const ARTIST_ID = "2fvw7GqBmXWP5TmhBzfhGm"; // Your original artist

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing Spotify CLIENT_ID or CLIENT_SECRET environment variables.");
}

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

export async function getAccessToken() {
  console.log('Requesting Spotify access token with CLIENT_ID:', CLIENT_ID);
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  console.log('Spotify token endpoint response status:', response.status);
  const text = await response.text();
  console.log('Spotify token endpoint response body:', text);
  if (!response.ok) {
    throw new Error(`Failed to fetch Spotify access token: ${response.status} ${text}`);
  }

  const data = JSON.parse(text);
  if (!data.access_token) {
    throw new Error("Spotify access token not found in response.");
  }
  console.log('Received Spotify access token:', data.access_token);
  return data;
}


// Fetch all albums (including singles) for the artist, then fetch all tracks from those albums, deduplicate, and return
export async function getAllArtistTracks() {
  const { access_token } = await getAccessToken();
  const limit = 10;
  let offset = 0;
  let allAlbums: any[] = [];
  let total = 0;
  do {
    const albumsUrl = `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&limit=${limit}&offset=${offset}&market=US`;
    console.log('Fetching artist albums from URL:', albumsUrl);
    const albumsRes = await fetch(albumsUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const albumsData = await albumsRes.json();
    console.log('Albums fetch status:', albumsRes.status, 'Body:', albumsData);
    if (!albumsRes.ok) {
      throw new Error(`Failed to fetch artist albums: ${albumsRes.status} ${JSON.stringify(albumsData)}`);
    }
    if (!albumsData.items) {
      throw new Error('No albums found for artist.');
    }
    if (offset === 0) total = albumsData.total || 0;
    allAlbums = allAlbums.concat(albumsData.items);
    offset += limit;
  } while (offset < total);

  const albumIds = [...new Set(allAlbums.map((album: any) => album.id))];
  console.log('Found album IDs:', albumIds);

  // Build a map of albumId -> album (with images)
  const albumMap = new Map();
  for (const album of allAlbums) {
    albumMap.set(album.id, album);
  }

  // Fetch tracks for each album and attach album info
  let allTracks: any[] = [];
  for (const albumId of albumIds) {
    const tracksUrl = `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50&market=US`;
    console.log('Fetching tracks for album:', albumId, tracksUrl);
    const tracksRes = await fetch(tracksUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const tracksData = await tracksRes.json();
    console.log('Tracks fetch status:', tracksRes.status, 'Body:', tracksData);
    if (!tracksRes.ok) {
      console.warn(`Failed to fetch tracks for album ${albumId}: ${tracksRes.status} ${JSON.stringify(tracksData)}`);
      continue;
    }
    if (!tracksData.items) continue;
    // Attach album info to each track
    const albumInfo = albumMap.get(albumId);
    allTracks = allTracks.concat(
      tracksData.items.map((track: any) => ({
        ...track,
        album: {
          id: albumInfo.id,
          name: albumInfo.name,
          images: albumInfo.images,
        },
      }))
    );
  }

  // Deduplicate tracks by ID
  const uniqueTracksMap = new Map();
  for (const track of allTracks) {
    if (!uniqueTracksMap.has(track.id)) {
      uniqueTracksMap.set(track.id, track);
    }
  }
  const uniqueTracks = Array.from(uniqueTracksMap.values());
  return uniqueTracks;
}