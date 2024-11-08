import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar2 from "@/components/header/navBar2";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "Muhammadwildansapoetro - %s",
    default: "Muhammadwildansapoetro - Agriculture, Programming, and Persib",
  },
  description:
    "Hello, I am Muhammad Wildan Sapoetro. My blog is dedicated to my interests: the fields of agriculture, the world of programming, and the vibrant energy of Persib Football Club. This blog is a journey through my thoughts on sustainable agriculture, coding projects, and the stories that shape my favorite football team. Dive in, and lets explore these fields together!",
  icons: {
    icon: "/blogger.png",
  },
  openGraph: {
    images: ["/open-book.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar2 />
        {children}
      </body>
    </html>
  );
}
