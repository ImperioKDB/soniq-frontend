import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optilearn | AI Study Ecosystem",
  description: "Turn your notes into quizzes, flashcards, and audiobooks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} cyber-grid min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
