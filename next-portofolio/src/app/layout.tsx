import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Muhammadwildansapoetro",
  description:
    "Muhammadwildansapoetro, a full-stack web developer, based in Bandung - Indonesia, eager to helping businesses grow with digital solutions.",
  icons: {
    icon: "/green_icon.svg",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
