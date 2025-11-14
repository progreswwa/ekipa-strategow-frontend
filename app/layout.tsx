import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EKIPA STRATEGÓW - AI Website Generator",
  description: "AI-powered website generation with briefing form, chat interface, and status tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
