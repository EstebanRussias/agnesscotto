import Link from "next/link";
import { events, formatDate } from "@/lib/events";

export default function EvenementsPage() {
  const today = new Date();
  const prochaineExpo =
    events
      .filter((event) => new Date(event.dateFin) >= today)
      .sort(
        (a, b) =>
          new Date(a.dateDebut).getTime() -
          new Date(b.dateDebut).getTime()
      )[0] || events[0];

  const evenementsPrecedents = events.filter(
    (event) => event.id !== prochaineExpo.id
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm mb-4">
            Prochaine exposition
          </p>

          <h1 className="text-5xl font-bold mb-6">
            {prochaineExpo.titre}
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            {prochaineExpo.description}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <span>📍 {prochaineExpo.lieu}</span>
            <span>
              📅 Du {formatDate(prochaineExpo.dateDebut)} au{" "}
              {formatDate(prochaineExpo.dateFin)}
            </span>
          </div>
        </div>
      </section>

      {/* Mise en avant */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={prochaineExpo.img}
            alt={prochaineExpo.titre}
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              {prochaineExpo.titre}
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              {prochaineExpo.description}
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Retrouvez cette exposition à {prochaineExpo.lieu} du{" "}
              {formatDate(prochaineExpo.dateDebut)} au{" "}
              {formatDate(prochaineExpo.dateFin)}.
            </p>

            <Link
              href={`/evenements/${prochaineExpo.id}`}
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Événements précédents */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Événements précédents
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {evenementsPrecedents.map((event) => (
              <Link
                key={event.id}
                href={`/evenements/${event.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition block"
              >
                <img
                  src={event.img}
                  alt={event.titre}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {event.type} au {event.lieu}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Du {formatDate(event.dateDebut)} au{" "}
                    {formatDate(event.dateFin)}
                  </p>

                  <p className="text-gray-500">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
