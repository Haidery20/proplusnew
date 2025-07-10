import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, DollarSign, Heart, Smartphone, Building, Stethoscope, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - MyItura Style */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-outfit">
                Transforming Maternal Healthcare, <span className="text-primary">one mother at a time</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-hanken leading-relaxed">
                We are committed to closing healthcare gaps through simple, powerful solutions. With a belief that every
                woman and community deserves access to quality care, we leverage technology and local insight to deliver
                affordable, accessible maternal healthcare across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-3 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 relative overflow-hidden">
                {/* Phone mockup */}
                <div className="relative z-10 max-w-sm mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl p-4 border">
                    <div className="bg-gray-100 rounded-2xl h-96 flex flex-col justify-center items-center space-y-4">
                      <div className="w-full bg-primary/10 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">Maternal Care</div>
                            <div className="text-xs text-gray-600">Book your appointment</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-green-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">Smart Scheduling</div>
                            <div className="text-xs text-gray-600">Next: Tomorrow 2PM</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <Stethoscope className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">Consult a Doctor</div>
                            <div className="text-xs text-gray-600">Available 24/7</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Maternal Healthcare Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Your Complete Maternal Healthcare Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pro+ Point of Care */}
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="font-outfit text-green-700">Pro+ Point of Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken text-gray-600">
                  Smart healthcare hubs providing fast, reliable access to essential maternal medical products in your
                  community
                </CardDescription>
              </CardContent>
            </Card>

            {/* Kasa Africa */}
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-outfit text-blue-700">Kasa Africa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken text-gray-600">
                  Digital platform for women's health offering virtual care, education, and product access with dignity
                </CardDescription>
              </CardContent>
            </Card>

            {/* Smart Scheduling */}
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-purple-50">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="font-outfit text-purple-700">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken text-gray-600">
                  Book appointments easily with automated reminders and seamless calendar integration
                </CardDescription>
              </CardContent>
            </Card>

            {/* Home Care */}
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-orange-50">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="font-outfit text-orange-700">Certified Home Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken text-gray-600">
                  Professional maternal care delivered to your home by qualified healthcare providers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-outfit text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-hanken text-lg">
                  To transform lives by fostering a healthcare system that helps individuals and communities reach their
                  full health potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-outfit text-secondary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-hanken text-lg">
                  To revolutionize healthcare through disruptive solutions that use technology, empower communities, and
                  ensure seamless access to essential services and products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">Why Choose ProPlus</h2>
            <p className="text-lg text-gray-600 font-hanken max-w-3xl mx-auto">
              We're bridging maternal healthcare gaps by enhancing accessibility, affordability, and quality through
              innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-outfit">Innovation-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  We design smart health solutions that directly respond to today's maternal health challenges.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="font-outfit">Accessibility for Everyone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  We reach women wherever they are, urban or rural, with personalized, timely care.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="font-outfit">Affordable Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  We offer high-quality services and products at competitive prices that work for every woman.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">Our Partners</h2>
            <p className="text-lg text-gray-600 font-hanken">
              We collaborate with incredible organizations that support our mission of transforming maternal health
              across Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="font-outfit">Africa Impact Initiative (AII)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Provided early-stage support and funding to help us scale our impact across the continent.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="font-outfit">Health Innovation Hub (H2i)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Supports innovation through mentorship, technical training, and global exposure opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="font-outfit">University of Toronto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Provided academic support, research collaboration, and strategic mentorship.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
