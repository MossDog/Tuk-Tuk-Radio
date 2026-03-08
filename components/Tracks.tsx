"use client";
import React, { useEffect, useState } from "react";
import type { Track } from "@/types/spotify";

interface TracksProps {
  className?: string;
}

export default function Tracks({ className }: TracksProps) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTracks() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/spotify/top-tracks");
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setTracks(data);
      } catch (err: any) {
        setError(err.message || "Failed to load tracks");
      } finally {
        setLoading(false);
      }
    }
    fetchTracks();
  }, []);

  if (loading) return <div>Loading tracks...</div>;
  if (error) return <div>Error: {error}</div>;

  // Debug: log the first track
  if (tracks.length > 0) {
    // eslint-disable-next-line no-console
    console.log("First track object:", tracks[0]);
  }

  return (
    <div className={className}>
      <h2 className="text-xl font-semibold ">Tracks</h2>
      <div className="flex flex-col gap-2">
        {tracks.map((track, idx) => (
          <div
            key={track.id}
            className={
              "border-border border-2 shadow-shadow bg-white p-4 flex items-center gap-4 rounded-base" +
              (idx !== tracks.length - 1 ? " border-b" : "")
            }
          >
            {track.album?.images?.[0]?.url && (
              <img
                src={track.album.images[0].url}
                alt={track.album.name}
                className="w-16 h-16 object-cover border-border border-2 shadow-shadow rounded-base"
              />
            )}
            <div>
              <div className="font-semibold text-lg">{track.name}</div>
              <div className="text-gray-600 text-sm">
                {track.artists.map((a) => a.name).join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
