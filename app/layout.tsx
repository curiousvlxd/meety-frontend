import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meety",
  description: "Schedule your zoom meetings easily with Meety",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
