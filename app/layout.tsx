import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientLayout from "./client-layout"
import { GoogleAnalytics } from "@/components/analytics"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "Web Perdana SEO - Jasa Pembuatan Website SEO Friendly & Aplikasi Mobile Profesional",
  description:
    "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin, dan sudah dioptimasi SEO untuk bisnis Anda.",
  keywords:
    "jasa pembuatan website seo friendly, jasa pembuatan website yang teroptimasi seo, jasa pembuatan website murah dan profesional, jasa redesign website, pembuatan aplikasi professional dan berkualitas, jasa pembuatan aplikasi murah",
  authors: [{ name: "Web Perdana SEO" }],
  creator: "Web Perdana SEO",
  publisher: "Web Perdana SEO",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://webperdanaseo.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webperdanaseo.id",
    siteName: "Web Perdana SEO",
    title: "Web Perdana SEO - Jasa Pembuatan Website SEO Friendly",
    description:
      "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional. Website menarik, loading cepat, keamanan terjamin.",
    images: [
      {
        url: "https://webperdanaseo.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Perdana SEO - Jasa Pembuatan Website SEO Friendly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webperdanaseo",
    creator: "@webperdanaseo",
    title: "Web Perdana SEO - Jasa Pembuatan Website SEO Friendly",
    description: "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional.",
    images: ["https://webperdanaseo.id/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    "geo.position": "-6.2088;106.8456",
    ICBM: "-6.2088, 106.8456",
    sponsored: "false",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" dir="ltr">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        <link rel="alternate" hrefLang="id" href="https://webperdanaseo.id" />
        <link rel="alternate" hrefLang="x-default" href="https://webperdanaseo.id" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for above-the-fold content */
            body { font-family: var(--font-sans), system-ui, sans-serif; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
            .skip-link { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
          `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-BYWYBHV59S" />
        <PerformanceMonitor />

        <main id="main-content">
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  )
}
