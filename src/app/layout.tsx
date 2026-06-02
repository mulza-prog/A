import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Westlands BnB",
  description: "Luxury Bed & Breakfast in Westlands, Nairobi - Book your stay today",
  keywords: ["BnB", "Westlands", "Nairobi", "accommodation", "booking"],
  openGraph: {
    title: process.env.NEXT_PUBLIC_APP_NAME || "Westlands BnB",
    description: "Luxury Bed & Breakfast in Westlands, Nairobi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
