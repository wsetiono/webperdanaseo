import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Target, Award, Heart, ArrowRight, Linkedin, Github, Mail } from "lucide-react"

export default function TentangKamiPage() {
  const values = [
    {
      icon: Target,
      title: "Fokus pada Hasil",
      description:
        "Kami berkomitmen untuk memberikan hasil terbaik yang sesuai dengan tujuan bisnis klien. Setiap project dikerjakan dengan detail dan fokus pada ROI yang optimal.",
    },
    {
      icon: Users,
      title: "Kolaborasi Tim",
      description:
        "Tim yang solid dan berpengalaman bekerja sama untuk menghasilkan solusi digital terbaik. Komunikasi yang baik adalah kunci kesuksesan setiap project.",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Standar kualitas tinggi dalam setiap aspek pengembangan, dari design hingga coding. Kami tidak berkompromi dengan kualitas hasil akhir.",
    },
    {
      icon: Heart,
      title: "Kepuasan Klien",
      description:
        "Kepuasan klien adalah prioritas utama kami. Kami selalu berusaha melebihi ekspektasi dan memberikan layanan terbaik dengan dukungan penuh.",
    },
  ]

  const team = [
    {
      name: "Ahmad Rizki",
      role: "Founder & Lead Developer",
      description:
        "Full-stack developer dengan pengalaman 7+ tahun dalam pengembangan web dan mobile. Spesialisasi dalam React, Node.js, dan arsitektur sistem.",
      image: "/placeholder.svg?key=team1",
      linkedin: "#",
      github: "#",
      email: "ahmad@webperdanaseo.id",
    },
    {
      name: "Sari Indah",
      role: "UI/UX Designer",
      description:
        "Designer berpengalaman 5+ tahun dengan fokus pada user experience dan interface design. Ahli dalam design thinking dan user research.",
      image: "/placeholder.svg?key=team2",
      linkedin: "#",
      github: "#",
      email: "sari@webperdanaseo.id",
    },
    {
      name: "Budi Santoso",
      role: "Mobile Developer",
      description:
        "Spesialis pengembangan aplikasi mobile dengan pengalaman 6+ tahun. Expert dalam React Native, Flutter, dan native iOS/Android development.",
      image: "/placeholder.svg?key=team3",
      linkedin: "#",
      github: "#",
      email: "budi@webperdanaseo.id",
    },
    {
      name: "Maya Putri",
      role: "SEO Specialist",
      description:
        "SEO expert dengan track record meningkatkan ranking website klien di Google. Spesialisasi dalam technical SEO dan content optimization.",
      image: "/placeholder.svg?key=team4",
      linkedin: "#",
      github: "#",
      email: "maya@webperdanaseo.id",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Berdirinya Web Perdana SEO",
      description: "Memulai perjalanan sebagai software house dengan fokus pada website SEO friendly.",
    },
    {
      year: "2020",
      title: "Ekspansi Layanan Mobile",
      description: "Menambah layanan pengembangan aplikasi mobile untuk melengkapi portofolio digital.",
    },
    {
      year: "2021",
      title: "50+ Project Selesai",
      description: "Mencapai milestone 50 project dengan tingkat kepuasan klien 98%.",
    },
    {
      year: "2022",
      title: "Tim Berkembang",
      description: "Mengembangkan tim dengan menambah spesialis UI/UX dan SEO untuk layanan yang lebih komprehensif.",
    },
    {
      year: "2023",
      title: "100+ Klien Puas",
      description: "Melayani lebih dari 100 klien dengan berbagai skala bisnis dari startup hingga enterprise.",
    },
    {
      year: "2024",
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi dengan teknologi terbaru dan mengembangkan solusi digital yang lebih canggih.",
    },
  ]

  const achievements = [
    { number: "100+", label: "Project Selesai", description: "Website dan aplikasi berkualitas tinggi" },
    { number: "50+", label: "Klien Puas", description: "Dari berbagai industri dan skala bisnis" },
    { number: "98%", label: "Tingkat Kepuasan", description: "Berdasarkan feedback klien" },
    { number: "5+", label: "Tahun Pengalaman", description: "Dalam industri pengembangan digital" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Tentang Kami
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                  Tim <span className="text-primary">Profesional</span> di Balik Kesuksesan Anda
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Web Perdana SEO adalah software house yang berfokus pada pembuatan website SEO friendly dan aplikasi
                  mobile berkualitas tinggi. Kami berkomitmen memberikan solusi digital terbaik untuk mengembangkan
                  bisnis Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontak">
                    Mulai Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portofolio">Lihat Portofolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="development-team.jpg"
                  alt="Tim Web Perdana SEO"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6 p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Misi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Memberikan solusi digital terbaik yang membantu bisnis berkembang melalui website SEO friendly dan
                    aplikasi mobile berkualitas tinggi. Kami berkomitmen untuk selalu mengutamakan kepuasan klien dan
                    hasil yang optimal.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6 p-0">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Visi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi software house terdepan di Indonesia yang dikenal karena kualitas, inovasi, dan layanan
                    terbaik dalam pengembangan website dan aplikasi mobile. Membantu transformasi digital bisnis
                    Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Nilai-Nilai Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Prinsip yang <span className="text-primary">Kami Pegang</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Nilai-nilai fundamental yang menjadi landasan dalam setiap project dan interaksi dengan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Tim Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Bertemu dengan <span className="text-primary">Tim Expert</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Tim profesional dengan keahlian dan pengalaman yang mumpuni di bidang masing-masing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  <div className="flex justify-center gap-3">
                    <Link
                      href={member.linkedin}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href={member.github}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Perjalanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Milestone <span className="text-primary">Penting</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Pencapaian Kami
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Angka yang <span className="text-primary">Membanggakan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{achievement.number}</div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold">{achievement.label}</div>
                  <div className="text-muted-foreground text-sm">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Siap Berkolaborasi dengan Kami?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto leading-relaxed">
            Mari wujudkan ide digital Anda bersama tim profesional Web Perdana SEO. Konsultasikan project Anda dan
            dapatkan solusi terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">
                Mulai Konsultasi <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/portofolio">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
