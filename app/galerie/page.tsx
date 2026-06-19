const photos = [
  {
    id:   1,
    title: "LEO",
    type:"Aquarelle",
    dimensions :"40x50",
    image: "https://placehold.co/600x400",
  }
];

export default function GaleriePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Galerie de mes oeuvres
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">
                {photo.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {photo.type} - {photo.dimensions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}