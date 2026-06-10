import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl"
        >
          Agnès Scotto Di Perta
        </Link>

        <div className="flex gap-6">
          <Link href="/">Accueil</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/evenements">Événements</Link>
        </div>
      </nav>
    </header>
  );
}