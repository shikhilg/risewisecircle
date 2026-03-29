import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RiseWise Circle — Neha Mittal | Certified Life Coach",
  description:
    "Find your perfect flow and create magic through synchronicity. Neha Mittal is a certified life coach offering life coaching, NLP, mindfulness, relationship coaching, and inner child healing.",
  keywords: [
    "life coach",
    "certified life coach",
    "NLP",
    "mindfulness",
    "inner child healing",
    "relationship coaching",
    "parenting coach",
    "stress reduction",
    "RiseWise Circle",
    "Neha Mittal",
  ],
  openGraph: {
    title: "RiseWise Circle — Neha Mittal | Certified Life Coach",
    description:
      "Find your perfect flow and create magic through synchronicity.",
    url: "https://risewisecircle.com",
    siteName: "RiseWise Circle",
    type: "website",
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
