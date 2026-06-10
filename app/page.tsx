export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <img
          src="https://placehold.co/1920x800"
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">
              Mon Site Vitrine
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quaerat.
            </p>
          </div>
        </div>
      </section>

      {/* Bloc 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Lorem Ipsum
            </h2>

            <p className="text-gray-600 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, deleniti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus, rem.
            </p>
          </div>

          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Section 1"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Bloc 2 inversé */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://placehold.co/600x400"
                alt="Section 2"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Dolor Sit Amet
              </h2>

              <p className="text-gray-600 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto officiis facere molestiae sapiente laborum
                accusantium repellendus voluptate pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 3 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Consectetur Adipisicing
            </h2>

            <p className="text-gray-600 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum deserunt numquam placeat iure at reiciendis
              asperiores similique.
            </p>
          </div>

          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Section 3"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}