import type { Metadata } from "next";
import "./globals.css";
import { bandData } from "@/data/band";

export const metadata: Metadata = {
  title: bandData.seo.title,
  description: bandData.seo.description,
  keywords: bandData.seo.keywords,
  authors: [{ name: bandData.name }],
  creator: bandData.name,
  openGraph: {
    title: bandData.seo.title,
    description: bandData.seo.description,
    url: bandData.seo.siteUrl,
    siteName: bandData.name,
    images: [
      {
        url: bandData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${bandData.name} - Official Website`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: bandData.seo.title,
    description: bandData.seo.description,
    creator: bandData.seo.twitterHandle,
    images: [bandData.seo.ogImage],
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
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-inter bg-[#0A0A0F] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
