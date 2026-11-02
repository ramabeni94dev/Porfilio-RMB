import { Bodoni_Moda, Hind } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ramiro Benitez | Full Stack Software Engineer",
  description:
    "Portfolio de Ramiro Benitez. Desarrollador Full Stack con más de 7 años de experiencia en software empresarial, integraciones e IA aplicada.",
  metadataBase: new URL("https://porfilio-rmb.vercel.app"),
  openGraph: {
    title: "Ramiro Benitez | Full Stack Software Engineer",
    description:
      "Software empresarial, arquitectura de producto e IA aplicada. Proyectos, experiencia y contacto.",
    url: "https://porfilio-rmb.vercel.app",
    siteName: "Ramiro Benitez Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bodoni.variable} ${hind.variable}`}>{children}</body>
    </html>
  );
}
