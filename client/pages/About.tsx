import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Beer,
  ChefHat,
  Heart,
  Award,
  Users,
  Clock,
  MapPin,
  Menu as MenuIcon,
  X,
  Beef,
  Wheat,
} from "lucide-react";
import { useState } from "react";

export default function About() {
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

  const values = [
    {
      icon: ChefHat,
      title: "Fresh Ingredients",
      description:
        "We use only the finest Certified Hereford Beef and fresh-baked buns made daily.",
    },
    {
      icon: Beer,
      title: "Craft Beer Excellence",
      description:
        "Curating 40+ rotating craft beers from local and national breweries.",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description:
        "Creating a welcoming space where friends and families gather to enjoy great food.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description:
        "Every burger is made to order with attention to detail and exceptional service.",
    },
  ];

  const milestones = [
    {
      year: "2013",
      title: "The Beginning",
      description:
        "Mr. Brews Taphouse opened its first location in Weston, Wisconsin with a vision of combining craft beer with gourmet burgers.",
    },
    {
      year: "2015",
      title: "Growing Recognition",
      description:
        "Recognized for our commitment to fresh ingredients and exceptional craft beer selection.",
    },
    {
      year: "2018",
      title: "Franchise Expansion",
      description:
        "Launched franchise opportunities to bring the Mr. Brews experience to more communities.",
    },
    {
      year: "2024",
      title: "Continued Excellence",
      description:
        "Continuing to serve fresh, quality food and maintain our position as a craft beer destination.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-brew-brown shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Beer className="h-8 w-8 text-brew-copper mr-2" />
                <span className="text-xl font-bold text-brew-beige">
                  Mr. Brews Taphouse
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.name === "About Us"
                        ? "text-brew-copper"
                        : "text-brew-beige hover:text-brew-copper"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-brew-copper hover:bg-brew-copper/90 text-white">
                Order Online
              </Button>
            </div>

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
      <section className="bg-brew-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-brew-beige max-w-2xl mx-auto">
            Serving craft beer and gourmet burgers since 2013 with a commitment
            to fresh ingredients and community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brew-copper text-white mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-6">
                Born in Weston, Wisconsin
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In March 2013, Mr. Brews Taphouse opened its doors in Weston,
                Wisconsin, with a simple yet ambitious vision: to create a place
                where craft beer enthusiasts and burger lovers could come
                together to enjoy exceptional food and drink in a welcoming
                atmosphere.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From day one, we've been committed to using only the finest
                ingredients. Our Certified Hereford Beef is freshly ground
                daily, our buns are baked fresh in-house, and our fries are
                hand-cut from premium potatoes. This dedication to quality has
                made us a destination for those who appreciate great food.
              </p>
              <Button className="bg-brew-brown hover:bg-brew-brown/90 text-brew-beige">
                Visit Our Locations
              </Button>
            </div>
            <div className="bg-brew-beige p-8 rounded-lg">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Users className="h-20 w-20 mx-auto mb-4 text-brew-copper" />
                  <p className="text-brew-charcoal font-medium">
                    Restaurant interior image placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brew-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality,
              community, and craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Premium Ingredients
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We believe great burgers start with great ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brew-copper/20">
              <CardContent className="p-8 text-center">
                <Beef className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  Certified Hereford Beef
                </h3>
                <p className="text-gray-600">
                  Freshly ground daily from premium Certified Hereford cattle,
                  ensuring consistent quality and flavor in every bite.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20">
              <CardContent className="p-8 text-center">
                <Wheat className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  Fresh-Baked Buns
                </h3>
                <p className="text-gray-600">
                  Our signature brioche buns are baked fresh daily in-house,
                  providing the perfect foundation for our gourmet burgers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20">
              <CardContent className="p-8 text-center">
                <ChefHat className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                  Hand-Cut Fries
                </h3>
                <p className="text-gray-600">
                  Fresh potatoes are hand-cut daily and cooked to golden
                  perfection, creating the ideal companion to our burgers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-brew-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-brew-beige max-w-2xl mx-auto">
              From a single location to a growing family of restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-brew-copper text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brew-beige">
                  {milestone.title}
                </h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-6">
            Customization for Every Taste
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            We understand that everyone has different dietary preferences and
            tastes. That's why we offer extensive customization options,
            including vegetarian patties, gluten-free buns, and a wide variety
            of toppings and sauces to create your perfect burger.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-brew-beige rounded-lg p-6 mb-4">
                <Heart className="h-12 w-12 text-brew-copper mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-brew-charcoal">
                Vegetarian Options
              </h3>
              <p className="text-gray-600">
                Plant-based patties and fresh vegetables
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brew-beige rounded-lg p-6 mb-4">
                <Wheat className="h-12 w-12 text-brew-copper mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-brew-charcoal">
                Gluten-Free
              </h3>
              <p className="text-gray-600">
                Gluten-free buns and preparation options
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brew-beige rounded-lg p-6 mb-4">
                <Award className="h-12 w-12 text-brew-copper mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-brew-charcoal">
                Custom Toppings
              </h3>
              <p className="text-gray-600">
                Wide variety of sauces, cheeses, and add-ons
              </p>
            </div>
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
