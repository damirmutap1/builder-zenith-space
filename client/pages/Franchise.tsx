import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Beer,
  DollarSign,
  TrendingUp,
  Users,
  GraduationCap,
  CheckCircle,
  Clock,
  MapPin,
  Menu as MenuIcon,
  X,
  Building,
  Handshake,
} from "lucide-react";
import { useState } from "react";

export default function Franchise() {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Low Start-Up Costs",
      description:
        "Attractive investment with competitive franchise fees and manageable operational costs.",
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      description:
        "Extensive training programs covering operations, management, and customer service.",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description:
        "Dedicated support team to help you succeed every step of the way.",
    },
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description:
        "Successful restaurant concept with growing demand for craft beer and gourmet burgers.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Initial Inquiry",
      description:
        "Submit your interest form and speak with our franchise development team.",
    },
    {
      step: "2",
      title: "Application Review",
      description:
        "Complete the franchise application and undergo our qualification process.",
    },
    {
      step: "3",
      title: "Discovery Process",
      description:
        "Visit our corporate headquarters and meet with our leadership team.",
    },
    {
      step: "4",
      title: "Franchise Agreement",
      description:
        "Review and sign the franchise agreement to officially join our family.",
    },
    {
      step: "5",
      title: "Training & Setup",
      description:
        "Complete training programs and prepare for your grand opening.",
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
                      item.name === "Franchise"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Franchise Opportunities
          </h1>
          <p className="text-xl text-brew-beige max-w-2xl mx-auto mb-8">
            Join the Mr. Brews Taphouse family and bring craft beer excellence
            to your community
          </p>
          <Button className="bg-brew-copper hover:bg-brew-copper/90 text-white text-lg px-8 py-4">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brew-copper text-white mb-4">
                Franchise Overview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-6">
                A Proven Business Opportunity
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Mr. Brews Taphouse offers an exciting franchise opportunity for
                entrepreneurs who want to be part of the growing craft beer and
                gourmet burger industry. With our proven business model,
                comprehensive training, and ongoing support, we provide
                everything you need to succeed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our franchise model is designed with attractive low-cost
                start-up and operations, making it accessible for qualified
                candidates who share our passion for quality food and
                exceptional service.
              </p>
              <Button className="bg-brew-brown hover:bg-brew-brown/90 text-brew-beige">
                Download Franchise Information
              </Button>
            </div>
            <div className="bg-brew-beige p-8 rounded-lg">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Building className="h-20 w-20 mx-auto mb-4 text-brew-copper" />
                  <p className="text-brew-charcoal font-medium">
                    Franchise restaurant image placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brew-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Why Choose Mr. Brews Taphouse?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We provide everything you need to build a successful restaurant
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-brew-copper mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brew-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Investment Details
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Transparent pricing and investment requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brew-copper/20">
              <CardHeader>
                <CardTitle className="text-brew-charcoal text-center">
                  Franchise Fee
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-brew-brown mb-4">
                  $45,000
                </div>
                <p className="text-gray-600">
                  One-time franchise fee for your territory rights and brand
                  license
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20">
              <CardHeader>
                <CardTitle className="text-brew-charcoal text-center">
                  Royalty Fee
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-brew-brown mb-4">
                  5%
                </div>
                <p className="text-gray-600">
                  Monthly royalty fee based on gross sales for ongoing support
                  and operations
                </p>
              </CardContent>
            </Card>

            <Card className="border-brew-copper/20">
              <CardHeader>
                <CardTitle className="text-brew-charcoal text-center">
                  Marketing Fund
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-brew-brown mb-4">
                  2%
                </div>
                <p className="text-gray-600">
                  Contribution to national marketing and advertising campaigns
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-brew-beige rounded-lg p-8">
            <h3 className="text-2xl font-bold text-brew-charcoal mb-6 text-center">
              Additional Investment Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-brew-charcoal mb-2">
                  Total Investment Range:
                </h4>
                <p className="text-gray-700">
                  $250,000 - $400,000 (including franchise fee, equipment,
                  build-out, and working capital)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brew-charcoal mb-2">
                  Liquid Capital Required:
                </h4>
                <p className="text-gray-700">
                  $150,000 minimum liquid capital to qualify for franchise
                  ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16 bg-brew-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Training & Support
            </h2>
            <p className="text-xl text-brew-beige max-w-2xl mx-auto">
              Comprehensive programs to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-brew-brown border-none">
              <CardHeader>
                <CardTitle className="text-brew-beige flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2" />
                  Initial Training Program
                </CardTitle>
              </CardHeader>
              <CardContent className="text-brew-beige">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    2-week corporate headquarters training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Operations and management systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Food preparation and safety protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Customer service excellence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Marketing and promotional strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-brew-brown border-none">
              <CardHeader>
                <CardTitle className="text-brew-beige flex items-center">
                  <Handshake className="h-6 w-6 mr-2" />
                  Ongoing Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-brew-beige">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Dedicated franchise business consultant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Regular operational reviews and guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Marketing support and materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Supply chain management assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-brew-copper" />
                    Technology and POS system support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Franchise Process
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your journey to franchise ownership in 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-brew-copper text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brew-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-brew-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brew-charcoal mb-4">
              Start Your Franchise Journey
            </h2>
            <p className="text-lg text-gray-700">
              Ready to learn more? Contact our franchise development team today.
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      Phone *
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      Preferred Location
                    </label>
                    <Input placeholder="City, State" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brew-charcoal mb-2">
                      Available Capital
                    </label>
                    <Input placeholder="Investment amount" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brew-charcoal mb-2">
                    Tell us about your experience
                  </label>
                  <Textarea
                    placeholder="Restaurant or business management experience..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-brew-copper hover:bg-brew-copper/90 text-white text-lg py-4">
                  Submit Franchise Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
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
