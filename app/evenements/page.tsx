export default function EvenementsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm mb-4">
            Prochaine exposition
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Exposition d'été 2026
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Retrouvez mes dernières œuvres lors d'une exposition
            exceptionnelle.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <span>📍 Bordeaux</span>
            <span>📅 15 au 30 juillet 2026</span>
          </div>
        </div>
      </section>

      {/* Mise en avant */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://placehold.co/800x600"
            alt="Exposition"
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Une nouvelle collection à découvrir
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quidem tempora quaerat, numquam nemo
              accusantium laboriosam architecto.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam cupiditate illum autem rem libero reprehenderit.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Événements à venir
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                ville: "Bordeaux",
                date: "15 juillet 2026",
              },
              {
                ville: "Toulouse",
                date: "10 septembre 2026",
              },
              {
                ville: "Paris",
                date: "5 novembre 2026",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src="https://placehold.co/600x400"
                  alt={event.ville}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {event.ville}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {event.date}
                  </p>

                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}