import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Beer,
  Utensils,
  Star,
  Filter,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Menu() {
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

  const burgers = [
    {
      name: "The Classic Mr. Brews",
      description:
        "Certified Hereford Beef, lettuce, tomato, onion, pickle, special sauce",
      price: "$13.99",
      featured: false,
    },
    {
      name: "Smokehouse BBQ Burger",
      description:
        "Pulled pork, crispy onion strings, BBQ sauce, cheddar cheese",
      price: "$16.99",
      featured: true,
    },
    {
      name: "Mushroom Swiss",
      description: "Sautéed mushrooms, Swiss cheese, garlic aioli",
      price: "$15.49",
      featured: false,
    },
    {
      name: "Brewmaster's Choice",
      description:
        "Beer-battered onion rings, bacon, cheddar, beer cheese sauce",
      price: "$17.99",
      featured: false,
    },
    {
      name: "Black & Blue",
      description: "Blackened seasoning, blue cheese crumbles, buffalo sauce",
      price: "$16.49",
      featured: false,
    },
  ];

  const beers = [
    {
      name: "Spotted Cow",
      brewery: "New Glarus Brewing",
      type: "Farmhouse Ale",
      abv: "4.8%",
      origin: "Wisconsin",
      description: "Crisp and refreshing with a hint of corn sweetness",
    },
    {
      name: "Moon Man",
      brewery: "New Glarus Brewing",
      type: "IPA",
      abv: "5.0%",
      origin: "Wisconsin",
      description: "Hoppy pale ale with citrus and pine notes",
    },
    {
      name: "Guinness Draught",
      brewery: "Guinness",
      type: "Stout",
      abv: "4.2%",
      origin: "Ireland",
      description: "Rich, creamy stout with coffee and chocolate notes",
    },
    {
      name: "Bell's Two Hearted",
      brewery: "Bell's Brewery",
      type: "IPA",
      abv: "7.0%",
      origin: "Michigan",
      description: "Balanced IPA with floral hop character",
    },
    {
      name: "Founders All Day IPA",
      brewery: "Founders Brewing",
      type: "Session IPA",
      abv: "4.7%",
      origin: "Michigan",
      description: "Light-bodied IPA perfect for all day drinking",
    },
    {
      name: "Stella Artois",
      brewery: "Anheuser-Busch InBev",
      type: "Lager",
      abv: "5.0%",
      origin: "Belgium",
      description: "Crisp, clean lager with a smooth finish",
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
                      item.name === "Menu"
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

      {/* Header */}
      <section className="bg-brew-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-brew-beige max-w-2xl mx-auto">
            Fresh ingredients, gourmet burgers, and 40+ craft beers on tap
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="burgers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="burgers" className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                Burgers & Food
              </TabsTrigger>
              <TabsTrigger value="beers" className="flex items-center gap-2">
                <Beer className="h-4 w-4" />
                Craft Beers
              </TabsTrigger>
              <TabsTrigger
                value="appetizers"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                Appetizers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="burgers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {burgers.map((burger, index) => (
                  <Card key={index} className="relative">
                    {burger.featured && (
                      <Badge className="absolute top-4 right-4 bg-brew-copper text-white">
                        Featured
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-brew-charcoal">
                        {burger.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{burger.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-brew-brown">
                          {burger.price}
                        </span>
                        <Button className="bg-brew-copper hover:bg-brew-copper/90">
                          Add to Order
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beers">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Filter className="h-5 w-5 text-brew-copper" />
                  <span className="text-brew-charcoal font-medium">
                    40+ Craft Beers on Tap - Rotating Selection
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beers.map((beer, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-brew-charcoal text-lg">
                            {beer.name}
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            {beer.brewery}
                          </p>
                        </div>
                        <Badge variant="outline">{beer.abv}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Type:</span>
                          <span className="text-sm text-gray-600">
                            {beer.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Origin:</span>
                          <span className="text-sm text-gray-600">
                            {beer.origin}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          {beer.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="appetizers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-brew-charcoal">
                      Beer Cheese Pretzel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Warm pretzel served with house-made beer cheese sauce
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brew-brown">
                        $8.99
                      </span>
                      <Button className="bg-brew-copper hover:bg-brew-copper/90">
                        Add to Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-brew-charcoal">
                      Loaded Fries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Fresh-cut fries topped with cheese, bacon, and green
                      onions
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brew-brown">
                        $11.99
                      </span>
                      <Button className="bg-brew-copper hover:bg-brew-copper/90">
                        Add to Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-brew-charcoal">
                      Buffalo Cauliflower
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Crispy cauliflower tossed in buffalo sauce with ranch dip
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brew-brown">
                        $9.99
                      </span>
                      <Button className="bg-brew-copper hover:bg-brew-copper/90">
                        Add to Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-brew-charcoal">
                      Brewhouse Wings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Jumbo wings with choice of sauce: Buffalo, BBQ, or Honey
                      Mustard
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brew-brown">
                        $12.99
                      </span>
                      <Button className="bg-brew-copper hover:bg-brew-copper/90">
                        Add to Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
