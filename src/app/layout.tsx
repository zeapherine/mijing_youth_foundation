import type { Metadata } from "next";
import { Inter, Epilogue, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-heading",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MYF | Mijing Youth Foundation",
  description: "A premium editorial-style foundation for youth empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${epilogue.variable} ${playfair.variable} h-full antialiased selection:bg-primary/20`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
