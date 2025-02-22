import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IML Tenis Liga de Clubes",
    template: "%s - IML Tenis",
  },
  description:
    "La liga de clubes IML Tenis es una de las ligas más importantes de clubes en Argentina, con más de 140  equipos de zona norte y oeste de Buenos Aires.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar",
    title: "IML Tenis Liga de clubes de Buenos Aires",
    description:
      "La liga de clubes IML Tenis es una de las ligas más importantes de clubes en Argentina, con más de 140  equipos de zona norte y oeste de Buenos Aires.",
    images: [
      {
        url: "https://imltenis.com.ar/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis Liga de clubes de Buenos Aires",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className="bg-background text-foreground flex flex-col h-full"
        style={{ fontFamily: montserrat.style.fontFamily }}
      >
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
