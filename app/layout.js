import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import SmokeEffect from "./Components/SmokeEffect/SmokeEffect";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Ramiro Benitez | Full Stack Developer",
  description:
    "Full Stack Developer building business software, internal platforms, AI-powered workflows and operational tools with React, Next.js, Node.js, Azure and PostgreSQL.",
  metadataBase: new URL("https://porfilio-rmb.vercel.app"),
  openGraph: {
    title: "Ramiro Benitez | Full Stack Developer",
    description:
      "Portfolio focused on real product delivery across internal systems, portals, automation and AI-assisted workflows.",
    url: "https://porfilio-rmb.vercel.app",
    siteName: "Ramiro Benitez Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiro Benitez | Full Stack Developer",
    description:
      "Portfolio focused on internal systems, AI-assisted workflows and business software delivery.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        <SmokeEffect />
        {children}
      </body>
    </html>
  );
}
