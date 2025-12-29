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
    "La Liga de Clubes IML Tenis es una de las competencias interclubes más importantes de Argentina, con la participación de cientos de equipos provenientes de las zonas norte y oeste del Gran Buenos Aires. Cada temporada convoca a miles de jugadores y jugadoras amateurs que representan a sus clubes en un ambiente competitivo, organizado y con gran espíritu deportivo.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar",
    title: "IML Tenis Liga de clubes de Buenos Aires",
    description:
      "La Liga de Clubes IML Tenis es una de las competencias interclubes más importantes de la región, con la participación de cientos de equipos provenientes de las zonas norte y oeste del Gran Buenos Aires. Cada temporada convoca a miles de jugadores y jugadoras amateurs que representan a sus clubes en un ambiente competitivo, organizado y con gran espíritu deportivo.",
    images: [
      {
        url: "/assets/imltenis.jpg",
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
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#242424" />
      </head>
      <body
        className="bg-background text-foreground min-h-screen flex flex-col transition-colors"
        style={{ fontFamily: montserrat.style.fontFamily }}
      >
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
