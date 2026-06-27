import Link from "next/link";
import { oeuvres } from "@/lib/oeuvres";

export default function GaleriePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Galerie de mes œuvres
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {oeuvres.map((oeuvre) => (
          <Link
            key={oeuvre.id}
            href={`/galerie/${oeuvre.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition block"
          >
            <img
              src={oeuvre.image}
              alt={oeuvre.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{oeuvre.title}</h2>
              <p className="mt-2 text-gray-600">
                {oeuvre.type} — {oeuvre.dimensions} cm
              </p>
              {oeuvre.description && (
                <p className="mt-2 text-gray-500 text-sm">{oeuvre.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}