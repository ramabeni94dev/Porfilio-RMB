import { Inter } from "next/font/google";
import "./globals.css";
import MouseCircle from "./Components/MouseCircle/MouseCircle"; // Asegúrate de usar la ruta correcta del archivo
import SmokeEffect from "./Components/SmokeEffect/SmokeEffect"; // Asegúrate de usar la ruta correcta del archivo

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RMB Porfolio",
  description: "Porfolio by create next app",
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
