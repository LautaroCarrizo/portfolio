import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
  <html lang="en">
    <body className={inter.className}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&family=Josefin+Sans:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </body>
  </html>
);
}
