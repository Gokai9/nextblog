import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import meta from "./componets/helper/metadata";
import Nav from "./componets/Nav";

const inter = Inter({ subsets: ["latin"] });
export const metadata = meta("Sim", "Blog tentang dunia programming")

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Header />{children}<Footer /></body>
    </html>
  );
}