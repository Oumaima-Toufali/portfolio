import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Oumaima Toufali | AI Engineer & Data Scientist",
  description: "Portfolio of Oumaima Toufali, an AI Engineer specializing in LLM-based systems, machine learning models, and scalable AI solutions. Open to full-time opportunities.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Oumaima Toufali | AI Engineer",
    description: "Building production-ready AI systems and scalable data pipelines. Specializing in LLMs, NLP, and Cloud Architecture.",
    siteName: "Oumaima Toufali Hub",
    type: "website",
    url: baseUrl,
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <div className="noise-bg"></div>
        {children}
      </body>
    </html>
  );
}
