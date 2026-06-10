const photos = [
  {
    id: 1,
    title: "Photo 1",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Photo 2",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Photo 3",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Photo 4",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "Photo 5",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    title: "Photo 6",
    image: "https://placehold.co/600x400",
  },
];

export default function GaleriePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Galerie Photos
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}