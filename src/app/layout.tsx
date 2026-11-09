import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Folio",
    template: "%s · Folio",
  },
  description:
    "Jay Arcement’s portfolio archive: the Halo checkout release, two USPTO patent files, the inventor listing, and the 2024 item-image application.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${newsreader.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
