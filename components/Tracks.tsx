"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
      <h2 className="text-xl font-semibold">Tracks</h2>
      <p className="text-sm text-black/70 mb-4">
        Check out our spotify!
      </p>
      <div className="flex flex-col gap-2">
        {tracks.map((track, idx) => {
          // Spoof link was copied from spotify app - AKA, weird Hack to display open in app prompt
          // Generate a random si param (22 hex chars)
          const randomSi = () => Array.from(crypto.getRandomValues(new Uint8Array(11))).map(b => b.toString(16).padStart(2, '0')).join("");
          let webUrl = track.external_urls?.spotify;
          if (webUrl) {
            const url = new URL(webUrl);
            url.searchParams.set("si", randomSi());
            url.searchParams.set("open", "true");
            webUrl = url.toString();
          }
          return (
            <a
              key={track.id}
              href={webUrl}
              target="_blank"
              className={
                "border-border border-2 shadow-shadow bg-white p-4 flex items-center gap-4 rounded-base transition hover:bg-background" +
                (idx !== tracks.length - 1 ? " border-b" : "")
              }
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {track.album?.images?.[0]?.url && (
                <Image
                  src={track.album.images[0].url}
                  alt={track.album.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover border-border border-2 shadow-shadow rounded-base"
                  unoptimized
                />
              )}
              <div>
                <div className="font-semibold text-lg">{track.name}</div>
                <div className="text-gray-600 text-sm">
                  {track.artists.map((a) => a.name).join(", ")}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
