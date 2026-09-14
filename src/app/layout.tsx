import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displaySans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const editorialSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const techMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alulcode.my.id"),
  title: "Muhammad Khoyron Ahlaqul Firdaus (AlulCode) — Fullstack Web Developer",
  description:
    "Editorial portfolio of Muhammad Khoyron Ahlaqul Firdaus (AlulCode). Fullstack Web Developer designing and building resilient, high-fidelity digital platforms. Laravel, React, Next.js, PostgreSQL, Docker.",
  keywords: [
    "Muhammad Khoyron Ahlaqul Firdaus",
    "AlulCode",
    "AC Monogram",
    "Fullstack Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Editorial Portfolio",
  ],
  authors: [{ name: "Muhammad Khoyron Ahlaqul Firdaus", url: "https://github.com/AlulCode45" }],
  creator: "Muhammad Khoyron Ahlaqul Firdaus",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alulcode.my.id",
    title: "Muhammad Khoyron Ahlaqul Firdaus (AlulCode) — Fullstack Web Developer",
    description:
      "Fullstack Web Developer designing and building resilient, high-fidelity digital systems. Exploring the boundary between design and engineering.",
    siteName: "Muhammad Khoyron (AlulCode - AC)",
    images: [{ url: "/assets/icon 1@2x.png", width: 800, height: 800, alt: "AC Monogram Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Khoyron Ahlaqul Firdaus (AlulCode) — Fullstack Web Developer",
    description: "Fullstack Web Developer designing and building resilient digital platforms.",
    images: ["/assets/icon 1@2x.png"],
  },
  icons: {
    icon: "/assets/icon 1@2x.png",
    apple: "/assets/icon 1@2x.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySans.variable} ${editorialSerif.variable} ${techMono.variable}`}
    >
      <body className="font-sans antialiased bg-[#F7F5F8] text-[#110A13] selection:bg-[#9814DC]/20 selection:text-[#9814DC] min-h-screen relative overflow-x-hidden">
        <div className="relative z-10 flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}

