import { Bricolage_Grotesque, Onest } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const onest = Onest({
  subsets: ["latin"],
  weight: "variable",
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
      <body className={`${bricolage.variable} ${onest.variable}`}>{children}</body>
    </html>
  );
}
