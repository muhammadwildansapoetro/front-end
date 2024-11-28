import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamamdwildansapoetro - Blog",
  description:
    "Muhamamdwildansapoetro - Blog about agriculture, sustainable agriculture, programming, full-stack webs development, geographic information system.",
  icons: {
    icon: "/green_icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
