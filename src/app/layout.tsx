import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PUMPRICE — Africa's Premium Drinks Experience, Rebuilt From Zero",
  description:
    "PUMPRICE is rebuilding its premium online drinks platform to deliver faster ordering, smarter logistics, bulk event planning, and an elevated drinks-buying experience for modern Africa.",
  keywords: [
    "PUMPRICE",
    "premium drinks",
    "online drinks store",
    "drinks delivery",
    "Nigeria",
    "Africa",
    "event ordering",
    "bulk drinks",
    "celebrations",
    "hosting",
  ],
  authors: [{ name: "PUMPRICE" }],
  openGraph: {
    title: "PUMPRICE — Africa's Premium Drinks Experience, Rebuilt From Zero",
    description:
      "PUMPRICE is rebuilding its premium online drinks platform to deliver faster ordering, smarter logistics, bulk event planning, and an elevated drinks-buying experience for modern Africa.",
    type: "website",
    locale: "en_NG",
    siteName: "PUMPRICE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUMPRICE — Africa's Premium Drinks Experience, Rebuilt From Zero",
    description:
      "PUMPRICE is rebuilding its premium online drinks platform to deliver faster ordering, smarter logistics, bulk event planning, and an elevated drinks-buying experience for modern Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050505] text-white" style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
