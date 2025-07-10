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
            {/* Apple App Store Button */}
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-3 h-14 rounded-lg" asChild>
              <a href="#" className="flex items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </Button>
           {/* Google Play Store Button */}
           <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-3 h-14 rounded-lg" asChild>
              <a href="#" className="flex items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
