import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/Common/Header";
import { Footer } from "@/Common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navodaya Shishu Sadan English Secondary School",
  description: "A School Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <>
          <title>Navodaya Shishu Sadan English Secondary School</title>
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          {/* <link rel="icon" href="images/favicon.ico" type="image/x-icon" /> */}
          <link rel="stylesheet" href="index.css" />
        </>
      </head>
      {/* <body>
        <Header/>
        {children}
        <Footer/> */}

      {/* Scripts  */}
      {/* <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.slick/1.8.1/slick.min.js"></script> */}
      {/* </body> */}

      <body className="min-h-screen flex flex-col">
        <div className="flex flex-col gap-40 flex-grow">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
