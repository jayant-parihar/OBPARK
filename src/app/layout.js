import { Outfit, Michroma } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export const metadata = {
  title: "OBPARK | Smart Parking Infrastructure",
  description:
    "OBPARK provides intelligent parking infrastructure, smart mobility and connected parking solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${outfit.variable} ${michroma.variable}`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
