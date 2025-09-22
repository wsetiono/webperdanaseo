import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    slug: "tips-membuat-website-seo-friendly-2024",
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
    image: "tips-website-seo-friendly.jpg",
    author: "Ahmad Rizki",
    date: "15 Januari 2024",
    readTime: "8 menit",
    views: "1,234",
    category: "SEO Tips",
  }

  const regularPost = {
    slug: "tren-desain-website-2024",
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
    image: "desain-website-populer.jpg",
    author: "Sari Indah",
    date: "10 Januari 2024",
    readTime: "6 menit",
    views: "892",
    category: "Design Trends",
  }

  const blogPosts = [featuredPost, regularPost]

  const categories = ["Semua", "SEO Tips", "Design Trends", "Web Development", "Mobile App", "Digital Marketing"]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Blog Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Insights & <span className="text-primary">Tips</span> Digital
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Dapatkan tips, tutorial, dan insights terbaru seputar web development, SEO, design, dan teknologi digital
              dari tim ahli Web Perdana SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge variant="secondary" className="w-fit">
              Featured Article
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline">{featuredPost.category}</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">{featuredPost.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {featuredPost.views}
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href={`/blog/${featuredPost.slug}`}>
                  Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Artikel <span className="text-primary">Terbaru</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Baca artikel-artikel terbaru kami untuk mendapatkan insights dan tips yang berguna untuk bisnis digital
              Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Baca Artikel <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Jangan Lewatkan Update Terbaru</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Subscribe newsletter kami untuk mendapatkan tips, tutorial, dan insights terbaru seputar web development dan
            digital marketing langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
