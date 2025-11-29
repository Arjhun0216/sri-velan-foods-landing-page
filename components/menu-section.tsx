"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const menuItems = [
  {
    name: "Idly",
    quantity: "2 pcs",
    price: "₹30",
    image: "/menu-idly.jpg",
    description:
      "Soft, fluffy steamed rice cakes made from fermented rice and urad dal batter. A healthy, light breakfast option served hot with coconut chutney, tomato chutney, and sambar. Perfect way to start your morning with traditional Tamil cuisine.",
    type: "veg",
  },
  {
    name: "Plain Dosa",
    quantity: "1 pc",
    price: "₹60",
    image: "/menu-plain-dosa.jpg",
    description:
      "Crispy golden rice crepe, perfectly thin and delicious. Made from fermented rice and lentil batter, spread thin on a hot griddle until golden and crispy. Served with sambar, coconut chutney, and tomato chutney. A timeless South Indian breakfast classic.",
    type: "veg",
  },
  {
    name: "Masala Dosa",
    quantity: "1 pc",
    price: "₹80",
    image: "/menu-masala-dosa.jpg",
    description:
      "Crispy dosa filled with spiced potato masala made with onions, turmeric, and curry leaves. The potato filling is perfectly seasoned and wrapped inside a golden, crispy dosa. Served with sambar and three varieties of chutney for an authentic South Indian experience.",
    type: "veg",
  },
  {
    name: "Uthapam",
    quantity: "2 pcs",
    price: "₹60",
    image: "/menu-uthapam.jpg",
    description:
      "Thick, fluffy rice pancakes topped with fresh vegetables including onions, tomatoes, green chilies, and coriander. A healthier alternative to dosa, soft in texture with crispy edges. Served hot with sambar and chutney.",
    type: "veg",
  },
  {
    name: "Semiya",
    quantity: "1 bowl",
    price: "₹40",
    image: "/menu-semiya.jpg",
    description:
      "Savory roasted vermicelli cooked with mustard seeds, curry leaves, green chilies, onions, and mixed vegetables. Light yet filling, seasoned with lemon juice for a tangy finish. Perfect for breakfast or a light evening meal.",
    type: "veg",
  },
  {
    name: "Chicken Biriyani",
    quantity: "1 plate",
    price: "₹180",
    image: "/menu-chicken-biriyani.jpg",
    description:
      "Aromatic long-grain basmati rice layered with tender marinated chicken pieces, cooked with traditional biriyani spices, saffron, and herbs. Each grain is infused with flavors of cardamom, cinnamon, and bay leaves. Served with raita and brinjal curry for an authentic biriyani experience.",
    type: "nonveg",
  },
  {
    name: "Mutton Biriyani",
    quantity: "1 plate",
    price: "₹220",
    image: "/menu-mutton-biriyani.jpg",
    description:
      "Premium fragrant biriyani with succulent mutton pieces slow-cooked until tender. The meat is marinated overnight in yogurt and spices, then layered with saffron-infused basmati rice. Garnished with fried onions and fresh mint, served with raita and gravy for a royal feast.",
    type: "nonveg",
  },
  {
    name: "Prawn Biriyani",
    quantity: "1 plate",
    price: "₹240",
    image: "/menu-prawn-biriyani.jpg",
    description:
      "Delicious coastal-style biriyani with fresh prawns marinated in aromatic spices and herbs. The prawns are perfectly cooked and layered with fragrant basmati rice infused with coastal masalas. A seafood lover's delight that captures the essence of South Indian coastal cuisine.",
    type: "nonveg",
  },
  {
    name: "Veg Biriyani",
    quantity: "1 plate",
    price: "₹120",
    image: "/menu-veg-biriyani.jpg",
    description:
      "Flavorful vegetarian biriyani loaded with fresh mixed vegetables including carrots, beans, cauliflower, and potatoes. Cooked with aromatic spices, saffron strands, and herbs. A wholesome, nutritious meal served with raita and curry that's perfect for vegetarians.",
    type: "veg",
  },
  {
    name: "Paneer Biriyani",
    quantity: "1 plate",
    price: "₹150",
    image: "/menu-paneer-biriyani.jpg",
    description:
      "Rich biriyani with soft, fresh paneer cubes marinated in spices and layered with fragrant basmati rice. The paneer is perfectly cooked to retain its softness while absorbing the aromatic flavors. Garnished with fried cashews, served with raita for a vegetarian delicacy.",
    type: "veg",
  },
  {
    name: "Parotta",
    quantity: "2 pcs",
    price: "₹40",
    image: "/menu-parotta.jpg",
    description:
      "Crispy, flaky layered flatbread made from maida flour, kneaded with ghee and folded into multiple layers. Pan-fried until golden and crispy on the outside while remaining soft and flaky inside. Perfect accompaniment to any curry or gravy.",
    type: "veg",
  },
  {
    name: "Kottu Parotta",
    quantity: "1 plate",
    price: "₹100",
    image: "/menu-kottu-parotta.jpg",
    description:
      "Shredded parotta stir-fried with eggs, mixed vegetables, onions, and aromatic spices. A popular street food that's hearty and flavorful. Cooked on a hot griddle with the signature chopping technique, creating a delicious fusion of crispy and soft textures.",
    type: "nonveg",
  },
  {
    name: "Chilli Parotta",
    quantity: "1 plate",
    price: "₹90",
    image: "/menu-chilli-parotta.jpg",
    description:
      "Spicy Indo-Chinese fusion dish featuring shredded parotta stir-fried with colorful bell peppers, onions, green chilies, and tangy sauces. Perfectly spiced and tossed with aromatic spices. A vegetarian delight for those who love bold, spicy flavors.",
    type: "veg",
  },
  {
    name: "Chicken Gravy",
    quantity: "1 bowl",
    price: "₹140",
    image: "/menu-chicken-gravy.jpg",
    description:
      "Rich, spicy chicken curry cooked with authentic South Indian spices including coriander, cumin, fennel, and black pepper. Slow-cooked tender chicken pieces in a thick, flavorful gravy made with coconut, tomatoes, and onions. Best paired with rice, dosa, or parotta.",
    type: "nonveg",
  },
  {
    name: "Fish Kulambu",
    quantity: "1 bowl",
    price: "₹160",
    image: "/menu-fish-kulambu.jpg",
    description:
      "Traditional tangy fish curry made with fresh fish pieces simmered in tamarind-based gravy. Infused with curry leaves, mustard seeds, and authentic South Indian spices. The perfect balance of sour and spicy, this home-style curry pairs excellently with steamed rice.",
    type: "nonveg",
  },
  {
    name: "Paneer Butter Masala",
    quantity: "1 bowl",
    price: "₹130",
    image: "/menu-paneer-butter-masala.jpg",
    description:
      "Creamy, rich tomato-based curry with soft paneer cubes swimming in a buttery, velvety gravy. Made with cashew paste, fresh cream, and aromatic spices. This restaurant-style favorite is mildly spiced and perfect for those who prefer less heat. Best enjoyed with naan or rice.",
    type: "veg",
  },
  {
    name: "Fish Fry",
    quantity: "3 pcs",
    price: "₹180",
    image: "/menu-fish-fry.jpg",
    description:
      "Crispy fried fish pieces marinated with South Indian spices, turmeric, red chili powder, and curry leaves. Each piece is coated in a special spice blend and shallow-fried until golden and crispy. A coastal delicacy that's crispy outside and tender inside.",
    type: "nonveg",
  },
  {
    name: "Prawn Fry",
    quantity: "6 pcs",
    price: "₹200",
    image: "/menu-prawn-fry.jpg",
    description:
      "Succulent prawns marinated in coastal spices including black pepper, fennel, and curry leaves, then fried to perfection. Each prawn is crispy on the outside while remaining juicy inside. A popular seafood appetizer that captures the authentic taste of Tamil Nadu's coastal cuisine.",
    type: "nonveg",
  },
  {
    name: "Non Veg Meal",
    quantity: "1 plate",
    price: "₹150",
    image: "/menu-nonveg-meal.jpg",
    description:
      "Complete traditional South Indian meal served on a banana leaf (or plate). Includes steamed rice, sambar, rasam, chicken curry, fish fry or egg curry, vegetables, papad, pickle, and buttermilk. A wholesome, balanced meal that offers variety in every bite.",
    type: "nonveg",
  },
  {
    name: "Veg Meals",
    quantity: "1 plate",
    price: "₹100",
    image: "/menu-veg-meal.jpg",
    description:
      "Authentic vegetarian South Indian meal served the traditional way. Includes steamed rice, sambar, rasam, three varieties of vegetables, kootu, poriyal, curd, papad, pickle, and payasam. A nutritious, balanced meal that's both satisfying and delicious.",
    type: "veg",
  },
  {
    name: "Naan",
    quantity: "2 pcs",
    price: "₹50",
    image: "/menu-naan.jpg",
    description:
      "Soft, fluffy Indian flatbread made from refined flour and yogurt, traditionally baked in a tandoor oven. The naan has a slightly charred exterior with a soft, pillowy interior. Perfect for scooping up curries and gravies, or enjoyed on its own.",
    type: "veg",
  },
  {
    name: "Butter Naan",
    quantity: "2 pcs",
    price: "₹60",
    image: "/menu-butter-naan.jpg",
    description:
      "Classic naan brushed generously with melted butter immediately after baking, creating a rich, indulgent flavor. The butter adds a luxurious taste and keeps the naan soft and moist. An irresistible accompaniment to any curry, especially paneer butter masala or chicken gravy.",
    type: "veg",
  },
]

const packages = [
  {
    name: "Daily Meal Box",
    price: "₹149",
    period: "per meal",
    description: "Includes rice/roti, curry, dal, vegetables.",
    features: ["Fresh daily preparation", "Customizable options", "Home-style cooking"],
  },
  {
    name: "Weekly Plan",
    price: "₹899",
    period: "per week",
    description: "Fresh home-cooked meals delivered every day.",
    features: ["7 days of meals", "Free delivery", "20% savings"],
  },
  {
    name: "Monthly Plan",
    price: "₹3,499",
    period: "per month",
    description: "Best value subscription for regular customers.",
    features: ["30 days of meals", "Free delivery", "30% savings", "Priority service"],
  },
]

export function MenuSection() {
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg" | "packages">("all")

  const filteredItems = menuItems.filter((item) => {
    if (filter === "all") return true
    if (filter === "packages") return false
    return item.type === filter
  })

  return (
    <section id="menu" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">Our Menu</h2>
          <p className="font-serif italic text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Traditional South Indian delicacies, prepared fresh daily
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            size="lg"
            className="rounded-full px-8"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("veg")}
            variant={filter === "veg" ? "default" : "outline"}
            size="lg"
            className="rounded-full px-8"
          >
            Veg
          </Button>
          <Button
            onClick={() => setFilter("nonveg")}
            variant={filter === "nonveg" ? "default" : "outline"}
            size="lg"
            className="rounded-full px-8"
          >
            Non-Veg
          </Button>
          <Button
            onClick={() => setFilter("packages")}
            variant={filter === "packages" ? "default" : "outline"}
            size="lg"
            className="rounded-full px-8"
          >
            Packages
          </Button>
        </div>

        {filter === "packages" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-black transition-all duration-300 hover:shadow-xl text-center"
              >
                <h3 className="text-3xl font-serif font-bold text-black mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-black">{pkg.price}</span>
                  <span className="text-lg text-black ml-2">{pkg.period}</span>
                </div>
                <p className="text-base text-black mb-6 leading-relaxed">{pkg.description}</p>
                <ul className="space-y-2 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <span className="text-green-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-black hover:bg-black/90 text-white px-8 py-3 rounded-full transition-all hover:scale-105 w-full"
                >
                  Subscribe Now
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-black transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1 items-center sm:items-start">
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 128px, 160px"
                      quality={80}
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">{item.name}</h3>
                      <span className="text-xl">{item.type === "veg" ? "🟢" : "🔴"}</span>
                    </div>
                    <p className="text-sm text-black mb-2 italic">{item.quantity}</p>
                    <p className="text-sm sm:text-base text-black leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center sm:items-end gap-4 sm:min-w-[180px]">
                  <div className="text-3xl sm:text-4xl font-bold text-black">{item.price}</div>
                  <Button
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white px-6 py-3 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
    </section>
  )
}
