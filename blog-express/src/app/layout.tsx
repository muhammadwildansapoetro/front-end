import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/navBar";
import { SessionProvider } from "@/context/useSession";

export const metadata: Metadata = {
  title: "Ngariung Blog",
  description:
    "Ngariung Blog is a vibrant platform where diverse minds come together to share ideas and collaborate on solutions for real-world challenges. Our mission is to inspire collective thinking and foster innovation by providing a space for thoughtful discussions and meaningful contributions. Join us in turning shared knowledge into actionable change and building a brighter future, one idea at a time.",
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
      <body>
        <SessionProvider>
          <NavBar />
          <ToastContainer
            draggable
            closeOnClick
            autoClose={5000}
            position="bottom-right"
          />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
