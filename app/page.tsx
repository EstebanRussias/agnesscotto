export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <img
          src="/images/back.png"
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">
              Agnès Scotto Di Perta
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Artiste peintre passionnée, je vous invite à découvrir mon univers
            </p>
          </div>
        </div>
      </section>

      {/* Bloc 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 leading-8">
              Je m’appelle Agnès Scotto Di Perta. C'est dans l'enfance que le dessin s'est offert à moi 
                tel un cadeau qui m'a permis d'exprimer mes émotions 
                au-delà des mots. Adolescente, mon choix d'intégrer 
                les beaux-arts à Bordeaux n'a pas pu se réaliser.
                Puis, je vais vers d'autres horizons professionnels
                et familiaux ...    
                Longue parenthèse.
            </p>
          </div>

          <div>
            <img
              src="/images/oeuvres/enfantMere.jpg"
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
                src="/images/oeuvres/orange.jpg"
                alt="Section 2"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            <div className="order-1 md:order-2">

              <p className="text-gray-600 leading-8">
                Ma liberté retrouvée je prends des cours à l'atelier Mary
                à Saint Augustin, c'est une révélation ; mon élan créatif
                reprend vie. Je fais des stages pour apprendre
                différentes techniques ; l'aquarelle, l'huile, 
                l'acrylique le pastel, les carnets de voyage et 
                le dessin bien sûr. Je voyage, je consulte des 
                livres ... je découvre, j'expérimente. 
                Parfois, j'expose quelques-unes de mes
                    œuvres dans des expositions de groupes. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 3 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 leading-8">
               Je dis merci à un aquarelliste renommé 
                qui à la fin d'un atelier m’a chuchoté à l'oreille 
                un merveilleux message d'encouragement. "ce que tu 
                peins fait du bien aux autres". Alors depuis, je 
                peins comme j'éclate de rire, pour m'amuser.... 
                C'est peut-être communicatif... qui sait... 
                Ce tourbillon, coloré et calligraphié, lumineux 
                et léger, libre et vivant, silencieux parfois, 
                me remplit de bonheur et de sérénité. 
                Il est "ma musique intérieure" et je souhaite 
                le partager avec ceux et celles qui désirent 
                trouver leur propre chemin artistique. 
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