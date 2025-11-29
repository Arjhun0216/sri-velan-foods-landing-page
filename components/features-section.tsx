import { Sparkles, Settings, Truck, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Freshly Home-Cooked Meals",
    description:
      "All dishes are made in a clean home kitchen using fresh, high-quality ingredients—just like your mom's cooking.",
  },
  {
    icon: Settings,
    title: "Customizable Orders",
    description:
      "Choose your spice level, portion size, and dietary preferences. We prepare every meal fresh based on your needs.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Your food is delivered hot and on time through our delivery partners like Swiggy/Zomato.",
  },
  {
    icon: Calendar,
    title: "Weekly & Monthly Meal Plans",
    description: "Special subscription plans available for regular customers—cheaper than eating out daily.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="font-serif italic text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of authentic home-style cooking
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-card group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
    </section>
  )
}
