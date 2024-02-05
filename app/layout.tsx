import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Model from "./components/models/Model";
import RegisterModel from "./components/models/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./components/models/LoginModel";

export const metadata: Metadata = {
  title: "Your Hotel!",
  description: "The best hotel in the world! 🏨",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModel />
          <LoginModel />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
