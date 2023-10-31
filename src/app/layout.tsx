import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/Navbar";
import Transition from "@/components/Transition";
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
      <div className="h-screen w-full flex flex-col">
        <Transition/>
      {children}
         <div className="w-full flex bg-nav justify-center">
          <NavBar />
        </div>
      </div>
    </body>
  </html>
);
}
