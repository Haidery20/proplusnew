import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Home, ShoppingCart, Smartphone, Apple, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-outfit">
            Built to Simplify Maternal Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-hanken">
            Streamline your maternal health journey with ProPlus. From home care to smart scheduling, we've got you
            covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Visit Online Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3 bg-transparent"
            >
              Talk to a Provider
            </Button>
          </div>
        </div>
      </section>

      {/* Kasa Africa Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">
                Instant Healthcare Service, No Queues in Sight
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-hanken">
                Say goodbye to waiting rooms and hello to on-demand healthcare. Book home care, chat with a provider, or
                get a consultation, all from the comfort of your home.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Kasa app screenshot"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Everything You Need for Your Maternal Healthcare
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-outfit">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Book appointments easily with reminders and calendar sync
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-outfit">Certified Home-Based Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">Request professional maternal care at home</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-outfit">Maternal Product Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Order high-quality products to support your journey
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Don't take our word for it! Here's what people are saying!
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This platform has revolutionized how I manage my health.",
                author: "Sarah Mbaga",
                role: "Mother",
              },
              {
                quote: "The community feature provides incredible insights and support.",
                author: "Mariam Abdala",
                role: "Mother",
              },
              {
                quote: "Home care service helped me at a critical moment in my pregnancy.",
                author: "Joyce John",
                role: "Mother",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 font-hanken italic">"{testimonial.quote}"</p>
                  <p className="font-semibold font-outfit">
                    – {testimonial.author}, {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-outfit">How can I get a test on Kasa?</AccordionTrigger>
              <AccordionContent className="font-hanken">
                Order on our mobile app (iOS/Android). A certified technician will collect samples at your selected
                time/location. Results will be available in your Kasa account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-outfit">
                How can I request a consultation with a provider?
              </AccordionTrigger>
              <AccordionContent className="font-hanken">
                Log in to your Kasa app or website account. Book a video/audio call or chat. Subscription required
                (daily, monthly, or yearly).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-outfit">Are the doctors on Kasa qualified?</AccordionTrigger>
              <AccordionContent className="font-hanken">
                Yes. All are licensed, verified, and experienced healthcare professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-outfit">
                What happens if I need to reschedule or cancel a test booking?
              </AccordionTrigger>
              <AccordionContent className="font-hanken">
                Go to "My orders" in your account to manage bookings. Contact support at info@proplus.co.tz for help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-outfit">
                What happens if I miss an appointment or cancel?
              </AccordionTrigger>
              <AccordionContent className="font-hanken">
                Notify support as soon as possible. Assistance will be provided for rescheduling or follow-up.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-outfit">
            Ready to Transform Your Healthcare Journey?
          </h2>
          <p className="text-xl mb-8 font-hanken">
            Join thousands of women already using ProPlus to take control of their maternal health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Smartphone className="mr-2 h-5 w-5" />
              Download on Google Play
            </Button>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
