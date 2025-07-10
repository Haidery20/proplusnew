import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Briefcase, UserPlus } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">Partner with ProPlus</h1>
          <p className="text-xl text-gray-600 font-hanken">
            Empower your practice, reach more patients, and deliver high-quality maternal care with ProPlus.
          </p>
        </div>
      </section>

      {/* Why Join the ProPlus Network */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Why Join the ProPlus Network?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg rounded-lg">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="font-outfit">Reach More Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Expand your reach to underserved women in need of trusted maternal care through our digital and
                  physical platform.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg rounded-lg">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="font-outfit">Simplify Your Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Use our tools to schedule, consult, manage follow-ups, and deliver care, all in one place.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg rounded-lg">
              <CardHeader>
                <UserPlus className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="font-outfit">Join a Purpose-Driven Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Be part of a growing community committed to reducing maternal mortality and improving women's health
                  outcomes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white shadow-lg rounded-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="font-outfit">Apply to Join</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Submit your credentials and get verified by our medical compliance team.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-lg rounded-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="font-outfit">Get Onboarded</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  We train you on how to use the Kasa platform, manage consultations, and reach patients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-lg rounded-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="font-outfit">Start Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-hanken">
                  Begin offering services via Kasa, from virtual consults to home care visits, and earn income.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Now CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-outfit">Ready to Join ProPlus?</h2>
          <p className="text-lg text-gray-600 mb-8 font-hanken">
            Whether you're a doctor, nurse, midwife, or health center, let's work together to bring quality care to
            every mother.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3" asChild>
            <a href="mailto:info@proplus.co.tz">Contact Us to Get Started</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
