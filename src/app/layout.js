"use client";

import "./globals.css";
import NavBar from "@/components/Navbar/navBar";
import SideBar from "@/components/SideBar/sideBar";
import RightBar from "@/components/RightBar/rightBar";
import Footer from "@/components/Footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <NavBar />

        <main className="relative flex h-auto min-h-[calc(100vh-8rem)]  pt-[6rem] gap-6 justify-center mb-6 items-start flex-wrap">
          <SideBar />
          {children}
          <RightBar />
        </main>
        <Footer />
      </body>
    </html>
  );
}