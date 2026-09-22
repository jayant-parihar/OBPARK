import { Outfit } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit", // optional but good practice
});

export const metadata = {
  title: "OBPARK | Smart Parking Infrastructure",
  description:
    "OBPARK provides intelligent parking infrastructure, smart mobility and connected parking solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}