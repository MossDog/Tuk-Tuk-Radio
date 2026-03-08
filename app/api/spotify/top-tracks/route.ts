import { NextResponse } from "next/server";
import { getAllArtistTracks } from "@/lib/spotify";

export async function GET() {
  try {
    const tracks = await getAllArtistTracks();
    return NextResponse.json(tracks);
  } catch (error: any) {
    // Enhanced logging for debugging
    console.error("Spotify API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
