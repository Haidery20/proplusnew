import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white font-outfit mb-4">ProPlus</h3>
            <p className="text-gray-300 font-hanken mb-4">
              Your maternal healthcare companion — Empowering healthcare with modern tools for better care.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-outfit">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-hanken">+255 766 831 124</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-hanken">info@proplus.co.tz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="font-hanken">Plot 235, Oyster Bay, Mtwara Crescent, Dar es Salaam</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-outfit">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors font-hanken">
                About Us
              </a>
              <a href="/providers" className="block text-gray-300 hover:text-white transition-colors font-hanken">
                For Providers
              </a>
              <a href="/download" className="block text-gray-300 hover:text-white transition-colors font-hanken">
                Get Kasa
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors font-hanken">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-hanken">© 2025 ProPlus LTD. Powered by EvMak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
