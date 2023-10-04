import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="particles-js" className="min-h-screen absolute w-screen"></div>
        {children}
        <Script src="/particlesJS/particles.min.js"></Script>
        <Script src="/particlesJS/particles.js"></Script>
      </body>
    </html>
  );
}
