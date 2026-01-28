"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogOverlay, DialogClose, DialogTitle } from "@radix-ui/react-dialog";

export default function GalleryModal({ open, onOpenChange, children }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-black/70 z-50" />
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <DialogContent className="relative bg-main rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-auto pointer-events-auto">
          <DialogTitle className="sr-only">Gallery item view</DialogTitle>
          <DialogClose asChild>
            <button
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              ×
            </button>
          </DialogClose>
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
}
