import { Inter } from "next/font/google";
import "./globals.css";
import MouseCircle from "./Components/MouseCircle/MouseCircle"; // Asegúrate de usar la ruta correcta del archivo
import SmokeEffect from "./Components/SmokeEffect/SmokeEffect"; // Asegúrate de usar la ruta correcta del archivo

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramiro Benitez | Full Stack Developer",
  description:
    "Full Stack Developer building modern web apps end-to-end (Next.js, React, Node.js). Portfolio with selected projects, responsibilities, and contact links.",
  metadataBase: new URL("https://porfilio-rmb.vercel.app"),
  openGraph: {
    title: "Ramiro Benitez | Full Stack Developer",
    description:
      "Portfolio with selected projects and responsibilities across web and internal business applications.",
    url: "https://porfilio-rmb.vercel.app",
    siteName: "Ramiro Benitez | Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmokeEffect />
        {children}
        <MouseCircle />
      </body>
    </html>
  );
}
