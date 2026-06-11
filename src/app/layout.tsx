import type { Metadata } from "next";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://books-era.com"),
  title: "Books Era | Your Trusted Bookstore in Pakistan",
  description: "Discover a wide variety of books at Books Era. We offer educational, fictional, and non-fictional books at the best prices with fast delivery across Pakistan.",
  keywords: ["books", "bookstore", "pakistan", "buy books online", "books era", "academic books", "novels"],
  authors: [{ name: "Books Era" }],
  openGraph: {
    title: "Books Era | Your Trusted Bookstore",
    description: "Discover a wide variety of books at Books Era. Fast delivery across Pakistan.",
    url: "https://books-era.com",
    siteName: "Books Era",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // You can replace this with your actual logo/banner path
        width: 1200,
        height: 630,
        alt: "Books Era Banner",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books Era | Your Trusted Bookstore",
    description: "Buy books online at the best prices with fast delivery.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${notoSans.variable} ${playfairDisplay.variable} antialiased min-h-screen bg-background`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
