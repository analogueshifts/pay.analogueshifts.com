import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import NavBar from "./navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnalogueShifts Payment Gateway",
  description: "AnalogueShifts Payment Gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
