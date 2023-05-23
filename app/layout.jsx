import "./globals.css";
import { Bebas_Neue, Montserrat, Source_Serif_Pro } from "next/font/google";

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
  title: "STAPA | Statistic Player",
  description: "Website for idk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} ${sourceSerifPro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
