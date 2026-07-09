import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { isRtlLocale, localeMeta } from "@/i18n/config";
import { getRequestLocale } from "@/i18n/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Platform",
    template: "%s | Digital Marketing Platform",
  },
  description:
    "Enterprise-grade SaaS Digital Marketing Platform — SEO, Analytics, Campaigns, and more.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Digital Marketing Platform",
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT !== "development",
    follow: process.env.NEXT_PUBLIC_ENVIRONMENT !== "development",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();

  return (
    <html
      lang={localeMeta[locale].intlLocale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
