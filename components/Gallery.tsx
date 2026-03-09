"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string;
  thumbnail?: string;
};

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load gallery.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading gallery...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => {
              setSelectedIdx(idx);
              setModalOpen(true);
            }}
          >
            <div className="relative aspect-square m-1">
              <Image
                src={item.type === "image" ? item.src : item.thumbnail || "/gallery/video-placeholder.jpg"}
                alt="gallery media"
                fill
                className="object-cover object-top border-border border-2"
                sizes="250px"
              />
            </div>
          </div>
        ))}
      </div>
      <GalleryModal open={modalOpen} onOpenChange={setModalOpen}>
        {selectedIdx !== null && (
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full"
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : 0))}
              aria-label="Previous"
              style={{ left: 0 }}
            >
              &#8592;
            </button>
            {/* Main Content */}
            {items[selectedIdx].type === "image" ? (
              <div className="relative w-full h-[70vh] max-w-2xl mx-auto">
                <Image
                  src={items[selectedIdx].src}
                  alt="gallery image"
                  fill
                  className="object-contain bg-black rounded"
                  sizes="80vw"
                />
              </div>
            ) : (
              <video
                src={items[selectedIdx].src}
                controls
                autoPlay
                className="w-full h-[70vh] max-w-2xl mx-auto bg-black rounded"
              />
            )}
            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full"
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % items.length : 0))}
              aria-label="Next"
              style={{ right: 0 }}
            >
              &#8594;
            </button>
          </div>
        )}
      </GalleryModal>
    </>
  );
}
