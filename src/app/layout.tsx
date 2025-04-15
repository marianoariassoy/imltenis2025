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
      "La liga de clubes IML Tenis es una de las ligas más importantes de clubes en Argentina, con más de 140  equipos de zona norte y oeste de Buenos Aires.",
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
        <meta name="theme-color" content="#252525" />
      </head>
      <body
        className="bg-background dark:bg-[#f3f3f3] text-foreground min-h-screen flex flex-col transition-colors"
        style={{ fontFamily: montserrat.style.fontFamily }}
      >
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
