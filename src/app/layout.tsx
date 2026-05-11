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
  title: "PUMPRICE — Platform Redevelopment In Progress",
  description:
    "PUMPRICE is rebuilding its premium online drinks platform to deliver a faster, smarter, and more immersive ordering experience.",
  keywords: [
    "PUMPRICE",
    "premium drinks",
    "online drinks store",
    "nightlife",
    "drinks delivery",
    "Nigeria",
    "party ordering",
  ],
  authors: [{ name: "PUMPRICE" }],
  openGraph: {
    title: "PUMPRICE — Platform Redevelopment In Progress",
    description:
      "PUMPRICE is rebuilding its premium online drinks platform to deliver a faster, smarter, and more immersive ordering experience.",
    type: "website",
    locale: "en_NG",
    siteName: "PUMPRICE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUMPRICE — Platform Redevelopment In Progress",
    description:
      "PUMPRICE is rebuilding its premium online drinks platform to deliver a faster, smarter, and more immersive ordering experience.",
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
