import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  structuredData?: object
}

export function SEOHead({
  title = "Web Perdana SEO - Jasa Pembuatan Website SEO Friendly",
  description = "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional.",
  keywords = "jasa pembuatan website seo friendly, jasa pembuatan website yang teroptimasi seo",
  canonical,
  ogImage = "/og-image.jpg",
  noindex = false,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Web Perdana SEO") ? title : `${title} | Web Perdana SEO`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots */}
      <meta
        name="robots"
        content={
          noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://webperdanaseo.id${ogImage}`} />
      <meta property="og:url" content={canonical || "https://webperdanaseo.id"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Web Perdana SEO" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://webperdanaseo.id${ogImage}`} />
      <meta name="twitter:site" content="@webperdanaseo" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  )
}
