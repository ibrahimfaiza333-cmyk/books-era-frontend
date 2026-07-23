import type { Metadata } from "next";
import Script from "next/script";
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
  description:
    "Discover a wide variety of books at Books Era. We offer educational, fictional, and non-fictional books at the best prices with fast delivery across Pakistan.",
  keywords: [
    "books",
    "bookstore",
    "pakistan",
    "buy books online",
    "books era",
    "academic books",
    "novels",
  ],
  authors: [{ name: "Books Era" }],
  openGraph: {
    title: "Books Era | Your Trusted Bookstore",
    description:
      "Discover a wide variety of books at Books Era. Fast delivery across Pakistan.",
    url: "https://books-era.com",
    siteName: "Books Era",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Books Era Banner",
      },
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
      <body
        suppressHydrationWarning
        className={`${notoSans.variable} ${playfairDisplay.variable} antialiased min-h-screen bg-background`}
      >
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}