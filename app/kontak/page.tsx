"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Smartphone } from "lucide-react"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@webperdanaseo.id",
      description: "Kirim email untuk konsultasi",
      action: "mailto:info@webperdanaseo.id",
    },
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Hubungi kami langsung",
      action: "tel:+6281234567890",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Chat via WhatsApp",
      action: "https://wa.me/6281234567890",
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Jakarta, Indonesia",
      description: "Kantor pusat kami",
      action: "#",
    },
  ]

  const services = [
    { value: "website-seo", label: "Pembuatan Website SEO" },
    { value: "redesign", label: "Redesign Website" },
    { value: "mobile-app", label: "Aplikasi Mobile" },
    { value: "maintenance", label: "Maintenance Website" },
    { value: "consultation", label: "Konsultasi Digital" },
  ]

  const budgetRanges = [
    { value: "under-5", label: "Di bawah Rp 5 juta" },
    { value: "5-10", label: "Rp 5 - 10 juta" },
    { value: "10-25", label: "Rp 10 - 25 juta" },
    { value: "25-50", label: "Rp 25 - 50 juta" },
    { value: "above-50", label: "Di atas Rp 50 juta" },
  ]

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas project. Website sederhana 7-14 hari, website kompleks 3-6 minggu, dan aplikasi mobile 1-3 bulan.",
    },
    {
      question: "Apakah ada garansi untuk website yang dibuat?",
      answer:
        "Ya, kami memberikan garansi 6 bulan untuk bug fixing dan maintenance dasar. Garansi mencakup perbaikan error dan update keamanan.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer:
        "Sistem pembayaran bertahap: 50% di awal project, 30% saat development selesai, dan 20% saat website/aplikasi sudah live dan testing selesai.",
    },
    {
      question: "Apakah website sudah mobile-friendly?",
      answer:
        "Semua website yang kami buat sudah responsive dan mobile-friendly. Kami menggunakan pendekatan mobile-first dalam development.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Mari <span className="text-primary">Diskusikan</span> Project Anda
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Konsultasikan kebutuhan website atau aplikasi mobile Anda dengan tim ahli kami. Dapatkan penawaran terbaik
              dan solusi yang tepat untuk mengembangkan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                  {info.action !== "#" && (
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <a href={info.action} target={info.action.startsWith("http") ? "_blank" : undefined}>
                        Hubungi
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Konsultasi Gratis
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">Ceritakan Project Anda</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Isi form di bawah ini untuk mendapatkan konsultasi gratis dan penawaran terbaik dari tim kami.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+62 812-3456-7890"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Nama Perusahaan</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="PT. Nama Perusahaan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimasi Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih range budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((budget) => (
                          <SelectItem key={budget.value} value={budget.value}>
                            {budget.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Deskripsi Project *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Ceritakan detail project Anda, fitur yang diinginkan, target audience, dll."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Mengapa Memilih Kami?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Respon Cepat</h4>
                        <p className="text-muted-foreground text-sm">
                          Tim kami akan merespon dalam 24 jam dan memberikan konsultasi gratis.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Pengalaman Terpercaya</h4>
                        <p className="text-muted-foreground text-sm">
                          100+ project selesai dengan tingkat kepuasan klien 98%.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Teknologi Terkini</h4>
                        <p className="text-muted-foreground text-sm">
                          Menggunakan teknologi terbaru untuk hasil yang optimal dan future-proof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Jam Operasional</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span className="text-primary font-medium">09:00 - 18:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span className="text-primary font-medium">09:00 - 15:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu</span>
                      <span className="text-muted-foreground">Tutup</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    *WhatsApp dan email dapat diakses 24/7 untuk konsultasi darurat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Pertanyaan yang <span className="text-primary">Sering Ditanyakan</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-3 p-0">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
