import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Download, Apple, Tablet, Monitor } from "lucide-react"
import Image from "next/image"

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

            {/* App Preview Section */}
            <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Experience Kasa Africa on Every Device
            </h2>
            <p className="text-lg text-gray-600 font-hanken max-w-2xl mx-auto">
              Whether you're at home or on the go, access your maternal healthcare companion seamlessly across all your
              devices.
            </p>
          </div>

          {/* Device Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Desktop/Laptop View */}
            <div className="relative">
              <div className="bg-gray-900 rounded-t-lg p-2">
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/desktop.png"
                    alt="Kasa Africa Web App"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <div className="text-center lg:text-left">
              <Monitor className="h-16 w-16 text-purple-600 mx-auto lg:mx-0 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">Web Dashboard</h3>
              <p className="text-gray-600 font-hanken mb-6">
                Access your complete healthcare dashboard from any computer. Manage appointments, view medical records,
                and connect with healthcare providers through our comprehensive web interface.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 font-hanken">
                <li>• Full appointment management</li>
                <li>• Detailed health tracking</li>
                <li>• Video consultations</li>
                <li>• Medical record access</li>
              </ul>
            </div>
          </div>

          {/* Mobile Devices Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Tablet View */}
            <div className="text-center">
              <div className="relative mx-auto mb-6" style={{ width: "200px" }}>
                <div className="bg-gray-900 rounded-2xl p-3">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src="/images/desktop.png"
                      alt="Kasa Africa Tablet App"
                      width={200}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <Tablet className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 font-outfit">iPad & Tablets</h4>
              <p className="text-sm text-gray-600 font-hanken mt-2">
                Perfect for home use with larger screens for better readability
              </p>
            </div>

            {/* iPhone View */}
            <div className="text-center">
              <div className="relative mx-auto mb-6" style={{ width: "320px" }}>
                    <Image
                      src="/images/appdashboard.png"
                      alt="Kasa Africa iOS App"
                      width={160}
                      height={320}
                      className="w-full h-auto"
                    />
              </div>
              <svg className="h-8 w-8 text-purple-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <h4 className="font-semibold text-gray-900 font-outfit">iOS App</h4>
              <p className="text-sm text-gray-600 font-hanken mt-2">Native iOS experience with seamless integration</p>
            </div>

            {/* Android View */}
            <div className="text-center">
              <div className="relative mx-auto mb-6" style={{ width: "240px" }}>


                    <Image src="/images/android.png"
                      alt="Kasa Africa Android App"
                      width={160}
                      height={320}
                      className="w-full h-auto"
                    />

              </div>
              <svg className="h-8 w-8 text-purple-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523,15.3414c-0.5511,0-0.9993-0.4486-0.9993-1.0006s0.4482-0.9993,0.9993-0.9993c0.5511,0,1,0.4473,1,0.9993S18.0741,15.3414,17.523,15.3414z M6.4767,15.3414c-0.5511,0-0.9993-0.4486-0.9993-1.0006s0.4482-0.9993,0.9993-0.9993c0.5511,0,1,0.4473,1,0.9993S7.0278,15.3414,6.4767,15.3414z M16.01,8.2578l1.5-2.6016c0.0833-0.1445,0.0337-0.3287-0.1108-0.4121c-0.1445-0.0833-0.3287-0.0337-0.4121,0.1108L15.4265,7.9688C14.3888,7.4844,13.2204,7.2266,12,7.2266s-2.3888,0.2578-3.4265,0.7422L7.0133,5.3549c-0.0833-0.1445-0.2675-0.1941-0.4121-0.1108C6.4567,5.3274,6.4071,5.5116,6.4904,5.6562l1.5,2.6016C6.4789,9.3203,5.25,10.8906,5.25,12.75h13.5C18.75,10.8906,17.5211,9.3203,16.01,8.2578z" />
              </svg>
              <h4 className="font-semibold text-gray-900 font-outfit">Android App</h4>
              <p className="text-sm text-gray-600 font-hanken mt-2">Optimized for all Android devices and versions</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 font-outfit">Mobile First</h5>
              <p className="text-xs text-gray-600 font-hanken mt-1">Designed for on-the-go access</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 font-outfit">Real-time Sync</h5>
              <p className="text-xs text-gray-600 font-hanken mt-1">Data syncs across all devices</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 font-outfit">Secure</h5>
              <p className="text-xs text-gray-600 font-hanken mt-1">End-to-end encryption</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 font-outfit">Fast</h5>
              <p className="text-xs text-gray-600 font-hanken mt-1">Lightning-fast performance</p>
            </div>
          </div>
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
