import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Sri Velan Foods</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Bringing the warmth of home-cooked meals to your doorstep. Every dish is prepared with love and care, just
              like mom makes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#menu" className="hover:text-primary-foreground transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="tel:877XXXXXXX" className="hover:text-primary-foreground transition-colors">
                  Call Now
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Monday - Sunday</li>
              <li>7:00 AM - 9:00 PM</li>
              <li className="pt-2 italic">Fresh meals prepared daily</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 fill-current" /> by Sri Velan Foods • {new Date().getFullYear()}
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">Experience the taste of home, every single day</p>
        </div>
      </div>
    </footer>
  )
}
