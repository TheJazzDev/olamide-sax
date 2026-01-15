import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olamide Sax | Vocalist • Saxophonist • Keyboardist",
  description: "UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music through live performance, worship, and community-focused cultural events. Founder & Lead Artist of Lammy Wonder Music.",
  keywords: ["Olamide Sax", "Saxophonist", "Vocalist", "Keyboardist", "Nigerian Artist", "UK Musician", "Gospel Music", "African Contemporary", "Lammy Wonder Music", "Live Performance", "Worship Music"],
  authors: [{ name: "Olamide Sax" }],
  openGraph: {
    title: "Olamide Sax | Vocalist • Saxophonist • Keyboardist",
    description: "UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olamide Sax | Vocalist • Saxophonist • Keyboardist",
    description: "UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
