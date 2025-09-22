import Script from "next/script"

interface StructuredDataProps {
  type: "organization" | "website" | "service" | "article" | "breadcrumb"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Web Perdana SEO",
          url: "https://webperdanaseo.id",
          logo: "https://webperdanaseo.id/logo.png",
          description:
            "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-812-3456-7890",
            contactType: "customer service",
            availableLanguage: "Indonesian",
          },
          sameAs: [
            "https://www.facebook.com/webperdanaseo",
            "https://www.instagram.com/webperdanaseo",
            "https://www.linkedin.com/company/webperdanaseo",
            "https://twitter.com/webperdanaseo",
            "https://www.youtube.com/@webperdanaseo",
          ],
          ...data,
        }

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Web Perdana SEO",
          url: "https://webperdanaseo.id",
          description:
            "Jasa pembuatan website SEO friendly, redesign website, dan pengembangan aplikasi mobile profesional",
          publisher: {
            "@type": "Organization",
            name: "Web Perdana SEO",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://webperdanaseo.id/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          ...data,
        }

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name || "Jasa Pembuatan Website SEO Friendly",
          description: data.description || "Layanan pembuatan website profesional yang sudah dioptimasi SEO",
          provider: {
            "@type": "Organization",
            name: "Web Perdana SEO",
            url: "https://webperdanaseo.id",
          },
          areaServed: {
            "@type": "Country",
            name: "Indonesia",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Web Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Pembuatan Website SEO Friendly",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Redesign Website",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Pengembangan Aplikasi Mobile",
                },
              },
            ],
          },
          ...data,
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.title,
          description: data.description,
          author: {
            "@type": "Organization",
            name: "Web Perdana SEO",
          },
          publisher: {
            "@type": "Organization",
            name: "Web Perdana SEO",
            logo: {
              "@type": "ImageObject",
              url: "https://webperdanaseo.id/logo.png",
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
          image: data.image,
          ...data,
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }

      default:
        return data
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData()),
      }}
    />
  )
}
