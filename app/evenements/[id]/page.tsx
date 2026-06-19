import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById, formatDate } from "@/lib/events";

export default async function EvenementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(Number(id));

  if (!event) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/evenements"
            className="inline-block text-sm text-gray-300 hover:text-white mb-8 transition"
          >
            ← Retour aux événements
          </Link>

          <p className="uppercase tracking-widest text-sm mb-4">
            {event.type}
          </p>

          <h1 className="text-5xl font-bold mb-6">{event.titre}</h1>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <span>📍 {event.lieu}</span>
            <span>
              📅 Du {formatDate(event.dateDebut)} au{" "}
              {formatDate(event.dateFin)}
            </span>
          </div>
        </div>
      </section>

      {/* Détail */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <img
          src={event.img}
          alt={event.titre}
          className="rounded-xl shadow-lg w-full mb-12"
        />

        <h2 className="text-3xl font-bold mb-6">À propos de l'événement</h2>

        <p className="text-gray-600 leading-8 text-lg mb-12">
          {event.description}
        </p>

        <div className="bg-gray-100 rounded-xl p-8 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
              Type
            </p>
            <p className="text-lg font-medium">{event.type}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
              Lieu
            </p>
            <p className="text-lg font-medium">{event.lieu}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
              Dates
            </p>
            <p className="text-lg font-medium">
              Du {formatDate(event.dateDebut)} au {formatDate(event.dateFin)}
            </p>
          </div>
        </div>
      <div>
        <iframe
        src={event.maps}
        width="100%"
        height="450"
        style={{  padding: 5}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </section>
    </main>
  );
}
