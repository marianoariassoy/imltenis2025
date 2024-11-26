import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "IML Tenis",
  description: "Interclubes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.className + " h-full"}>
      <body className="bg-background text-foreground p-4 flex flex-col gap-y-4 h-full">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
