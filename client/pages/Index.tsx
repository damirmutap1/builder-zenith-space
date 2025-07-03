import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Beer,
  Utensils,
  MapPin,
  Clock,
  Star,
  Award,
  ChefHat,
  Users,
  Calendar,
  Gift,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
    { name: "Franchise", href: "/franchise" },
    { name: "Conversion", href: "/conversion" },
    { name: "Events", href: "/events" },
    { name: "Pub Club", href: "/pub-club" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-brew-brown shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Beer className="h-8 w-8 text-brew-copper mr-2" />
                <span className="text-xl font-bold text-brew-beige">
                  Mr. Brews Taphouse
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brew-beige hover:text-brew-copper px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Order Online Button */}
            <div className="hidden md:block">
              <Button className="bg-brew-copper hover:bg-brew-copper/90 text-white">
                Order Online
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brew-beige hover:text-brew-copper p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brew-charcoal">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brew-beige hover:text-brew-copper block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-brew-copper hover:bg-brew-copper/90 text-white">
                Order Online
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brew-charcoal text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-brew-charcoal/90 to-brew-brown/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Craft Beer &
              <span className="text-brew-copper block">Gourmet Burgers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-brew-beige">
              Experience the perfect blend of 40+ craft beers on tap and fresh,
              made-to-order gourmet burgers with Certified Hereford Beef.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brew-copper hover:bg-brew-copper/90 text-white text-lg px-8 py-4"
              >
                View Our Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brew-beige text-brew-beige hover:bg-brew-beige hover:text-brew-charcoal text-lg px-8 py-4"
              >
                Find Locations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since 2013, we've been committed to fresh ingredients and
              exceptional craft beer selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <ChefHat className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600">
                  Certified Hereford Beef, fresh-baked buns, and hand-cut fries
                  made daily.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Beer className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  40+ Craft Beers
                </h3>
                <p className="text-gray-600">
                  Rotating selection of local and national craft beers on tap.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  Community Focused
                </h3>
                <p className="text-gray-600">
                  A gathering place for friends, family, and craft beer
                  enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Burger of the Month */}
      <section className="py-16 bg-brew-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brew-copper text-white mb-4">
                Burger of the Month
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-6">
                The Smokehouse BBQ Burger
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Certified Hereford Beef patty topped with house-smoked pulled
                pork, crispy onion strings, BBQ sauce, and melted cheddar cheese
                on our signature fresh-baked brioche bun.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600">(47 reviews)</span>
                </div>
              </div>
              <Button className="bg-brew-brown hover:bg-brew-brown/90 text-brew-beige">
                Order Now - $16.99
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <Utensils className="h-20 w-20" />
                <span className="sr-only">
                  Smokehouse BBQ Burger image placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-brew-copper/20 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-brew-copper mx-auto mb-3" />
                <h3 className="font-semibold text-brew-charcoal mb-2">
                  Events
                </h3>
                <p className="text-sm text-gray-600">
                  Check out our happy hours and special events
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-brew-copper mx-auto mb-3" />
                <h3 className="font-semibold text-brew-charcoal mb-2">
                  Pub Club
                </h3>
                <p className="text-sm text-gray-600">
                  Join our loyalty program for exclusive rewards
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-brew-copper mx-auto mb-3" />
                <h3 className="font-semibold text-brew-charcoal mb-2">
                  Locations
                </h3>
                <p className="text-sm text-gray-600">
                  Find a Mr. Brews Taphouse near you
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Gift className="h-8 w-8 text-brew-copper mx-auto mb-3" />
                <h3 className="font-semibold text-brew-charcoal mb-2">
                  Gift Cards
                </h3>
                <p className="text-sm text-gray-600">
                  Perfect gift for craft beer lovers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brew-charcoal text-brew-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Beer className="h-6 w-6 text-brew-copper mr-2" />
                <span className="font-bold">Mr. Brews Taphouse</span>
              </div>
              <p className="text-sm">
                Craft beer and gourmet burgers since 2013. Fresh ingredients,
                exceptional service.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/menu" className="hover:text-brew-copper">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/locations" className="hover:text-brew-copper">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-brew-copper">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/pub-club" className="hover:text-brew-copper">
                    Pub Club
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/franchise" className="hover:text-brew-copper">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="/conversion" className="hover:text-brew-copper">
                    Conversion
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-brew-copper">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-brew-copper">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-sm space-y-1">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <div>
                    <p>Mon-Thu: 11am-10pm</p>
                    <p>Fri-Sat: 11am-11pm</p>
                    <p>Sun: 11am-9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brew-brown/30 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Mr. Brews Taphouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
