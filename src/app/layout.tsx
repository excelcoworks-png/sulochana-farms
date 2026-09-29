import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sulochana Farms | From Our Land to Your Family",
  description: "Adopt a Red Diamond Guava tree from Sulochana Farms in Penukonda.",
  icons: { icon: "/logo/sulochana-farms-logo.png", apple: "/logo/sulochana-farms-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
