import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agnesscottodiperta.vercel.app"),
  title: {
    default: "Agnès Scotto Di Perta — Peintre à Libourne",
    template: "%s | Agnès Scotto Di Perta",
  },
  description:
    "Agnès Scotto Di Perta, artiste peintre basée à Libourne, en Gironde. Découvrez ses œuvres, ses expositions et salons artistiques.",
  keywords: [
    "agnes scotto",
    "agnes scotto di perta",
    "peinture exposition gironde",
  ],
  authors: [{ name: "Agnès Scotto Di Perta" }],
  openGraph: {
    title: "Agnès Scotto Di Perta — Peintre à Libourne",
    description:
      "Découvrez les œuvres, expositions et salons artistiques d'Agnès Scotto Di Perta, artiste peintre en Gironde.",
    url: "https://agnesscottodiperta.vercel.app",
    siteName: "Agnès Scotto Di Perta",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Agnès Scotto Di Perta",
              jobTitle: "Artiste peintre",
              url: "https://agnesscottodiperta.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Libourne",
                addressRegion: "Gironde",
                addressCountry: "FR",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}