import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { MenuProvider } from "@/context/menu-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "IML Tenis Interclubes",
    template: "%s - IML Tenis",
  },
  description:
    "La liga de clubes IML Tenis es una de las competencias interclubes más importantes de Argentina, con la participación de cientos de equipos provenientes principalemente de las zonas norte y oeste del Gran Buenos Aires. Cada temporada convoca a miles de jugadores y jugadoras amateurs que representan a sus clubes en un ambiente competitivo, organizado y con gran espíritu deportivo.",
  icons: {
    icon: "https://imltenis.com.ar/assets/favicon.png",
    shortcut: "https://imltenis.com.ar/assets/favicon.png",
    apple: "https://imltenis.com.ar/assets/favicon.png",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar",
    title: "IML Tenis Interclubes Buenos Aires",
    description:
      "La liga de clubes IML Tenis es una de las competencias interclubes más importantes de Argentina, con la participación de cientos de equipos provenientes principalemente de las zonas norte y oeste del Gran Buenos Aires. Cada temporada convoca a miles de jugadores y jugadoras amateurs que representan a sus clubes en un ambiente competitivo, organizado y con gran espíritu deportivo.",
    images: [
      {
        url: "https://imltenis.com.ar/assets/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis Interclubes Buenos Aires",
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
    <html lang="es" className={montserrat.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#222222" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col ">
        <MenuProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MenuProvider>
        <AnalyticsProvider />
        <div className="fixed bottom-0 left-0 w-full h-full -z-20">
          <svg
            className="hidden md:block"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
          >
            <path
              d="M-200 250C250 -50 800 0 1200 300C1500 500 1800 450 2200 100V-200H-200Z"
              className="shape shape1"
            />
            <path
              d="M-200 1100C400 600 1000 650 1500 950C1700 1050 1900 1000 2200 800V1400H-200Z"
              className="shape shape2"
            />
          </svg>
          <svg
            className="md:hidden"
            viewBox="0 0 390 844"
            preserveAspectRatio="none"
          >
            <path
              d="M-100 100C50 -50 300 50 450 250V-100H-100Z"
              className="shape shape1"
            />
            <path
              d="M-100 900C150 550 250 600 450 800V1000H-100Z"
              className="shape shape2"
            />
          </svg>
        </div>
      </body>
    </html>
  );
}
