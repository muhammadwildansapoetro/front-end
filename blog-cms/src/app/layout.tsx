import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";

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
    template: "Agri-Tech Blog - %s",
    default: "Agri-Tech Blog",
  },
  description:
    "Explore the latest advancements in agriculture technology with Agri-Tech. From precision farming and smart irrigation to sustainable crop management, discover how tech is transforming the future of farming and helping create a greener, more productive world. Stay informed with expert insights, industry news, and practical tips for modern agriculture.",
  icons: {
    icon: "/blogger.png",
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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
