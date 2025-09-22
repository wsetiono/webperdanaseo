"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    "Halo, saya ingin konsultasi tentang pembuatan website",
    "Berapa biaya untuk membuat website SEO friendly?",
    "Saya tertarik dengan layanan redesign website",
    "Bisa konsultasi tentang aplikasi mobile?",
  ]

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const handleCustomMessage = () => {
    const whatsappUrl = "https://wa.me/6281234567890"
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-primary/20">
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Perdana SEO</h3>
                    <p className="text-xs text-primary-foreground/80">Biasanya membalas dalam beberapa menit</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Halo! Ada yang bisa kami bantu? Pilih pesan di bawah atau kirim pesan custom:
                </p>
              </div>

              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left p-3 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    {message}
                  </button>
                ))}
              </div>

              <Button onClick={handleCustomMessage} className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Kirim Pesan Custom
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </>
  )
}
