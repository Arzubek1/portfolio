import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/global.scss";
import LayoutSite from "@/components/layout/LayoutSite";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Arzubek | Fullstack Developer",
  description: "Portfolio showcasing web development and creative coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable}`}
      >
        <LayoutSite>{children}</LayoutSite>
      </body>
    </html>
  );
}
