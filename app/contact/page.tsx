"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-outfit">Get in Touch with ProPlus</h1>
          <p className="text-lg text-gray-600 font-hanken">
            Whether you're a patient, partner, provider, or investor, we'd love to hear from you. Use the form below or
            contact us directly.
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-outfit">Send us a Message</CardTitle>
                <CardDescription className="font-hanken">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-lg font-semibold mb-2">
                      Thank you! Your message has been sent.
                    </div>
                    <p className="text-gray-600 font-hanken">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="font-hanken">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-hanken">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-hanken">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-hanken">
                        Subject
                      </Label>
                      <Select onValueChange={(value) => handleChange("subject", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-hanken">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Right Side - Contact Info and Map */}
            <div className="space-y-8">
              {/* Direct Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-outfit">Contact Information</CardTitle>
                  <CardDescription className="font-hanken">
                    Get in touch with us directly using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold font-outfit"> Email</p>
                      <p className="text-gray-600 font-hanken">info@proplus.co.tz</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold font-outfit"> Phone</p>
                      <p className="text-gray-600 font-hanken">+255 766 831 124</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold font-outfit"> Address</p>
                      <p className="text-gray-600 font-hanken">
                        Plot 235, Oyster Bay
                        <br />
                        Mtwara Crescent
                        <br />
                        Dar es Salaam
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Embed */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-outfit">Our Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d39.2!3d-6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJTIDM5wrAxMicwMC4wIkU!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ProPlus Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-8 font-hanken">
            Interested in becoming a provider, partner, or exploring ProPlus further? Visit our About or Providers pages
            to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/about">Explore ProPlus</a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="/providers">Partner With Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
