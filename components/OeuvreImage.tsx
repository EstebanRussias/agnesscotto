"use client";

import { useState } from "react";

export default function OeuvreImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="rounded-xl shadow-lg max-h-[60vh] mx-auto object-contain cursor-zoom-in"
      />

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={src}
            alt={alt}
            className="max-h-screen max-w-screen object-contain"
          />
        </div>
      )}
    </>
  );
}