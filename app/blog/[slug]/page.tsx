import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { notFound } from "next/navigation"

// Blog posts data
const blogPosts = {
  "tips-membuat-website-seo-friendly-2024": {
    title: "Tips Membuat Website SEO Friendly di Tahun 2024",
    excerpt:
      "Panduan lengkap untuk membuat website yang SEO friendly dengan teknik terbaru dan best practices yang terbukti efektif meningkatkan ranking di Google.",
    content: `
      <p>SEO (Search Engine Optimization) adalah salah satu faktor terpenting dalam kesuksesan sebuah website. Di tahun 2024, algoritma Google semakin canggih dan mengutamakan user experience serta kualitas konten.</p>
      
      <h2>1. Optimasi Kecepatan Loading Website</h2>
      <p>Kecepatan loading website adalah faktor ranking yang sangat penting. Google mengutamakan website yang loading cepat karena memberikan user experience yang baik.</p>
      
      <h3>Tips Meningkatkan Kecepatan Website:</h3>
      <ul>
        <li>Kompres gambar dengan format WebP atau AVIF</li>
        <li>Gunakan CDN (Content Delivery Network)</li>
        <li>Minifikasi CSS dan JavaScript</li>
        <li>Implementasi lazy loading untuk gambar</li>
        <li>Pilih hosting yang berkualitas</li>
      </ul>
      
      <h2>2. Mobile-First Indexing</h2>
      <p>Google menggunakan mobile-first indexing, artinya versi mobile website Anda yang akan diindeks terlebih dahulu. Pastikan website Anda responsive dan mobile-friendly.</p>
      
      <h2>3. Optimasi Konten dan Keyword</h2>
      <p>Konten berkualitas dengan keyword yang tepat masih menjadi raja dalam SEO. Lakukan riset keyword yang mendalam dan buat konten yang memberikan value kepada pembaca.</p>
      
      <h3>Strategi Konten SEO:</h3>
      <ul>
        <li>Riset keyword dengan tools seperti Google Keyword Planner</li>
        <li>Buat konten yang menjawab pertanyaan user</li>
        <li>Gunakan heading structure (H1, H2, H3) yang baik</li>
        <li>Optimasi meta title dan meta description</li>
        <li>Tambahkan internal linking yang relevan</li>
      </ul>
      
      <h2>4. Technical SEO</h2>
      <p>Aspek teknis website juga sangat penting untuk SEO. Pastikan website Anda memiliki struktur yang baik dan mudah di-crawl oleh search engine.</p>
      
      <h3>Checklist Technical SEO:</h3>
      <ul>
        <li>Buat sitemap XML dan submit ke Google Search Console</li>
        <li>Optimasi robots.txt</li>
        <li>Implementasi schema markup</li>
        <li>Perbaiki broken links dan 404 errors</li>
        <li>Gunakan SSL certificate (HTTPS)</li>
      </ul>
      
      <h2>5. User Experience (UX)</h2>
      <p>Google semakin mengutamakan user experience dalam algoritma ranking. Website yang memberikan UX yang baik akan mendapat ranking yang lebih tinggi.</p>
      
      <h3>Faktor UX yang Penting:</h3>
      <ul>
        <li>Core Web Vitals (LCP, FID, CLS)</li>
        <li>Navigation yang mudah dan intuitif</li>
        <li>Design yang clean dan professional</li>
        <li>Content yang mudah dibaca</li>
        <li>Call-to-action yang jelas</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>SEO di tahun 2024 bukan hanya tentang keyword dan backlink, tetapi lebih fokus pada user experience dan kualitas konten. Dengan menerapkan tips di atas, website Anda akan memiliki peluang yang lebih besar untuk ranking tinggi di Google.</p>
      
      <p>Jika Anda membutuhkan bantuan untuk membuat website SEO friendly, tim Web Perdana SEO siap membantu Anda. Kami memiliki pengalaman dalam membuat website yang tidak hanya menarik secara visual, tetapi juga dioptimasi untuk SEO.</p>
    `,
    image: "tips-membuat-website-ramah-seo.jpg",
    author: "Ahmad Rizki",
    date: "15 Januari 2024",
    readTime: "8 menit",
    views: "1,234",
    category: "SEO Tips",
  },
  "tren-desain-website-2024": {
    title: "Tren Desain Website yang Akan Populer di Tahun 2024",
    excerpt:
      "Eksplorasi tren desain website terbaru yang akan mendominasi tahun 2024, dari minimalism hingga interactive elements yang meningkatkan user engagement.",
    content: `
      <p>Dunia desain website terus berkembang dengan cepat. Setiap tahun, tren baru bermunculan yang mempengaruhi cara kita merancang dan mengembangkan website. Di tahun 2024, ada beberapa tren desain yang diprediksi akan mendominasi industri web development.</p>
      
      <h2>1. Minimalism dengan Sentuhan Bold</h2>
      <p>Minimalism tetap menjadi favorit, tetapi dengan sentuhan yang lebih berani. Designer mulai mengkombinasikan clean layout dengan typography yang bold dan warna yang striking.</p>
      
      <h3>Karakteristik Tren Ini:</h3>
      <ul>
        <li>White space yang banyak</li>
        <li>Typography yang besar dan bold</li>
        <li>Color palette yang terbatas tapi impactful</li>
        <li>Focus pada satu elemen utama per section</li>
      </ul>
      
      <h2>2. Dark Mode sebagai Standard</h2>
      <p>Dark mode bukan lagi sekadar opsi tambahan, tetapi menjadi standard yang diharapkan user. Selain mengurangi eye strain, dark mode juga memberikan kesan modern dan premium.</p>
      
      <h2>3. Interactive Micro-animations</h2>
      <p>Micro-animations yang subtle dan meaningful semakin populer. Animasi ini tidak hanya untuk estetika, tetapi juga membantu user memahami interface dan memberikan feedback yang jelas.</p>
      
      <h3>Contoh Micro-animations yang Efektif:</h3>
      <ul>
        <li>Hover effects pada buttons dan links</li>
        <li>Loading animations yang engaging</li>
        <li>Scroll-triggered animations</li>
        <li>Form validation feedback</li>
      </ul>
      
      <h2>4. 3D Elements dan Immersive Experience</h2>
      <p>Dengan semakin powerful-nya browser dan device, 3D elements mulai banyak digunakan untuk menciptakan experience yang lebih immersive dan memorable.</p>
      
      <h2>5. Sustainable Web Design</h2>
      <p>Kesadaran akan environmental impact membuat sustainable web design semakin penting. Designer mulai fokus pada optimasi yang mengurangi carbon footprint website.</p>
      
      <h3>Prinsip Sustainable Design:</h3>
      <ul>
        <li>Optimasi gambar dan asset</li>
        <li>Efficient coding practices</li>
        <li>Green hosting solutions</li>
        <li>Minimal resource consumption</li>
      </ul>
      
      <h2>6. Voice User Interface (VUI)</h2>
      <p>Dengan semakin populernya voice assistant, website mulai mengintegrasikan voice interface untuk memberikan accessibility yang lebih baik dan user experience yang inovatif.</p>
      
      <h2>7. Personalization dan AI-Driven Content</h2>
      <p>AI mulai digunakan untuk memberikan personalized experience kepada setiap user berdasarkan behavior dan preferences mereka.</p>
      
      <h2>Kesimpulan</h2>
      <p>Tren desain website 2024 menunjukkan fokus yang kuat pada user experience, sustainability, dan teknologi yang emerging. Sebagai web developer dan designer, penting untuk tetap update dengan tren ini sambil tetap mengutamakan functionality dan usability.</p>
      
      <p>Di Web Perdana SEO, kami selalu mengikuti tren terbaru dalam desain website untuk memastikan klien kami mendapatkan website yang tidak hanya functional, tetapi juga modern dan engaging. Hubungi kami untuk konsultasi desain website Anda!</p>
    `,
    image: "/placeholder.svg?key=design-trends",
    author: "Sari Indah",
    date: "10 Januari 2024",
    readTime: "6 menit",
    views: "892",
    category: "Design Trends",
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Blog
                </Link>
              </Button>
            </div>

            {/* Article Meta */}
            <div className="space-y-6 mb-12">
              <div className="space-y-4">
                <Badge variant="secondary">{post.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">{post.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {post.views}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <span className="text-sm font-medium">Bagikan:</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Bagikan artikel ini:</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/blog">Lihat Artikel Lainnya</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Butuh Website SEO Friendly?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Tim Web Perdana SEO siap membantu Anda membuat website yang tidak hanya menarik, tetapi juga dioptimasi
            untuk SEO dan performa tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">Konsultasi Gratis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/layanan">Lihat Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
