import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const raleway = Raleway({subsets: ["latin"] });

const globalStyles = `${raleway.className} flex flex-col max-w-5xl w-full min-h-screen p-24 m-auto`;

export const metadata: Metadata = {
  title: "Mariah Laqua",
  description: "Amsterdam based Fullstack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalStyles}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
