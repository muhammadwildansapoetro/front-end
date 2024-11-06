import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/header/navBar";
import Footer from "@/components/footer/footer";

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
  title: "FarmLink Indonesia",
  description:
    "Welcome to FarmLink Indonesia, a trusted leader in sustainable agriculture and modern farming solutions. We specialize in eco-friendly crop management, soil health, and resource-efficient food production to help farmers grow healthier, more productive crops. With a commitment to innovation, our solutions leverage advanced agricultural technology to optimize yield, reduce environmental impact, and support local and global food supply chains. Discover how FarmLink Indonesia is driving the future of agriculture with sustainable, reliable, and quality-focused farming practices.",
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
