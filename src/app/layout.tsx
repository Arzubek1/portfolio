import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Inconsolata } from "next/font/google";
import "@/styles/global.scss";
import LayoutSite from "@/components/layout/LayoutSite";
import { Providers } from "@/provider/Provider";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"]
})

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/portfolio_icon.webp" type="image/webp" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${jetBrainsMono.variable} ${inconsolata.variable}`}>
        <Providers>
          <LayoutSite>{children}</LayoutSite>
        </Providers>
      </body>
    </html>
  );
}
