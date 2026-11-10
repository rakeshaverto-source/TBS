"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Masonry grid of newspaper clippings with a keyboard-friendly lightbox.
export default function PressGallery({ images }) {
  const [open, setOpen] = useState(null);
  const total = images.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, total]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className="block w-full break-inside-avoid rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <img src={src} alt={`The Bharat School in the news – clipping ${i + 1}`} loading="lazy" className="w-full h-auto" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Press clipping"
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={images[open]}
            alt={`The Bharat School in the news – clipping ${open + 1}`}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + total) % total);
            }}
            className="absolute left-3 sm:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % total);
            }}
            className="absolute right-3 sm:right-6 w-12 h-12 rounded-full bg-[#e1251b] hover:bg-red-600 text-white flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 font-semibold">
            {open + 1} / {total}
          </span>
        </div>
      )}
    </>
  );
}
