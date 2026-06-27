import Link from "next/link";
import { notFound } from "next/navigation";
import { getOeuvreById } from "@/lib/oeuvres";

export default async function OeuvreDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const oeuvre = getOeuvreById(Number(id));

  if (!oeuvre) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-15 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/galerie"
            className="inline-block text-sm text-gray-300 hover:text-white mb-3 transition"
          >
            ← Retour à la galerie
          </Link>
          <h1 className="text-5xl font-bold mb-6">{oeuvre.title}</h1>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <p className="text-xl text-gray-300">Technique : {oeuvre.type}</p>
            <p className="text-xl text-gray-300">Dimensions : {oeuvre.dimensions} cm</p>
          </div>
          {oeuvre.description && (
            <p className="text-lg text-gray-400 mt-4">{oeuvre.description}</p>
          )}
        </div>
      </section>

      {/* Détail */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <img
          src={oeuvre.image}
          alt={oeuvre.title}
          className="rounded-xl shadow-lg w-full"
        />
      </section>
    </main>
  );
}