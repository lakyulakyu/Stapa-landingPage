import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sponsorship from "./Sections/Sponsorship";

import {
  Bebas_Neue,
  Montserrat,
  Source_Serif_Pro,
  Poppins,
} from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebasneue",
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sourceSerifPro = Source_Serif_Pro({
  variable: "--font-ssp",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "STAPA",
  description: "Website for ",
};

export default function RootLayout({ children, path }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} ${sourceSerifPro.variable} ${poppins.variable} overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <div id="More" className="overflow-hidden">
          <Sponsorship />
          <Footer />
        </div>
      </body>
    </html>
  );
}
