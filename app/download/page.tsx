import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Download, Apple } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-100 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Download the Kasa Africa App
          </h1>
          <p className="text-xl text-gray-600 font-hanken">
            Your maternal healthcare companion is now one tap away. Book care, order products, and speak to trusted
            providers anytime, anywhere.
          </p>
        </div>
      </section>

      {/* App Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">Why Download Kasa Africa?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="font-outfit">Instant Access to Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Book consultations, get home visits, and receive care from qualified midwives and doctors – all from
                  your phone.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Download className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="font-outfit">Easy Product Ordering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Order essential maternal products and get them delivered from your nearest Point of Care center.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Apple className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                <CardTitle className="font-outfit">Personalized for You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Track your pregnancy, get educational content, and chat with experts tailored to your health journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Store Links */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">Get the App</h2>
          <p className="text-lg text-gray-600 mb-12 font-hanken">
            Download the Kasa Africa app and start managing your maternal health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg" asChild>
              <a href="#" className="flex items-center">
                <Apple className="mr-3 h-6 w-6" />
                Download on App Store
              </a>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg" asChild>
              <a href="#" className="flex items-center">
                <Smartphone className="mr-3 h-6 w-6" />
                Get it on Google Play
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
