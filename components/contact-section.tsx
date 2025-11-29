import { MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">Visit Us</h2>
          <p className="font-serif italic text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to serve you with love and care
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden border-2 border-border h-[400px]">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.264537856739!2d80.19283931482123!3d13.086516990780892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e8f7d3c3c5%3A0x8d1e3e8f7d3c3c5!2sMogappair%20West%2C%20Chennai%2C%20Tamil%20Nadu%20600037!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Velan Foods Location"
              />
            </CardContent>
          </Card>

          {/* Address Details */}
          <Card className="border-2 border-border bg-card">
            <CardContent className="p-8 h-full flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-card-foreground mb-3">Our Location</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      2/1139, 2nd Block
                      <br />
                      Mogappair West
                      <br />
                      Chennai - 600037
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-card-foreground mb-3">Call Us</h3>
                    <a
                      href="tel:877XXXXXXX"
                      className="text-lg text-muted-foreground hover:text-accent transition-colors"
                    >
                      877XXXXXXX
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 italic">Available daily: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>

                {/* Order Info */}
                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Order now through:</span>
                    <br />
                    Swiggy • Zomato • Direct Call
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
    </section>
  )
}
