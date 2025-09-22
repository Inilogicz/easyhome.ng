"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarIcon,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  CalendarDays,
  CheckCircle,
} from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    location: "",
    message: "",
    contactMethod: "email",
  })

  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingType: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
  })

  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [isScheduleConfirmed, setIsScheduleConfirmed] = useState(false)

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMeetingInputChange = (field: string, value: string | Date | undefined) => {
    setMeetingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Meeting scheduled:", meetingData)
    setIsScheduleConfirmed(true)
    setTimeout(() => {
      setIsScheduleDialogOpen(false)
      setIsScheduleConfirmed(false)
      setMeetingData({
        name: "",
        email: "",
        phone: "",
        meetingType: "",
        date: undefined,
        time: "",
        message: "",
      })
    }, 2000)
  }

  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 // Sunday only (Saturday is half day)
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance">
            Get in Touch with Easy Homes
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Ready to build your dream home? Contact our team of experts to discuss your housing needs and explore our
            innovative modular solutions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-light text-foreground mb-6">Send Us an Inquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type Interest</Label>
                      <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student Unit</SelectItem>
                          <SelectItem value="professional">Professional Unit</SelectItem>
                          <SelectItem value="family">Family Home</SelectItem>
                          <SelectItem value="commercial">Commercial Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4-6m">₦4-6M</SelectItem>
                          <SelectItem value="12-16m">₦12-16M</SelectItem>
                          <SelectItem value="18-25m">₦18-25M</SelectItem>
                          <SelectItem value="custom">Custom Budget</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="victoria-island">Victoria Island</SelectItem>
                        <SelectItem value="lekki">Lekki</SelectItem>
                        <SelectItem value="university-areas">University Areas</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your housing needs..."
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">Preferred Contact Method</Label>
                    <RadioGroup
                      value={formData.contactMethod}
                      onValueChange={(value) => handleInputChange("contactMethod", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="meeting" id="meeting-contact" />
                        <Label htmlFor="meeting-contact">In-Person Meeting</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Head Office */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">Head Office & Showroom</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Easy Homes Nigeria Limited</p>
                    <p>123 Obafemi Awolowo Way</p>
                    <p>Ikeja, Lagos State, Nigeria</p>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Numbers */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">Phone Numbers</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Main Office: +234 (0) 1-234-5678</p>
                    <p>Sales Hotline: +234 (0) 809-123-4567</p>
                    <p>Customer Service: +234 (0) 818-765-4321</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Addresses */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">Email Addresses</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>General Inquiries: info@easyhomes.ng</p>
                    <p>Sales: sales@easyhomes.ng</p>
                    <p>Customer Support: support@easyhomes.ng</p>
                    <p>Partnerships: partnerships@easyhomes.ng</p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed (Emergency support available)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-foreground mb-4">Manufacturing Facility</h2>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Agbara Industrial Estate</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Plot 45, Industrial Avenue</p>
                    <p>Agbara, Ogun State, Nigeria</p>
                    <p>Phone: +234 (0) 802-987-6543</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Facility Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• State-of-the-art modular construction equipment</li>
                    <li>• Quality control and testing laboratories</li>
                    <li>• Sustainable material processing center</li>
                    <li>• Logistics and distribution hub</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Showroom Visit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
              Schedule a Showroom Visit
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Experience our homes firsthand at our state-of-the-art showroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">What You'll Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Full-scale modular home displays</h4>
                      <p className="text-sm text-muted-foreground">
                        Walk through actual units to experience the space and quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Virtual reality design stations</h4>
                      <p className="text-sm text-muted-foreground">
                        Design and customize your home using our AI-powered platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Material samples and sustainability demonstrations
                      </h4>
                      <p className="text-sm text-muted-foreground">See and touch the sustainable materials we use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Expert consultations with our design team</h4>
                      <p className="text-sm text-muted-foreground">Get personalized advice from our housing experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">Book Your Appointment</h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Call our sales team at <span className="font-medium text-foreground">+234 (0) 809-123-4567</span> to
                    schedule your visit, or use our online booking system below.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Directions from Lagos Island</h4>
                    <p className="text-sm text-muted-foreground">
                      Take Third Mainland Bridge to Oworonsoki, follow Airport Road to Ikeja. Our showroom is located
                      opposite Computer Village.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Public Transportation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bus: Ikeja Bus Stop (5-minute walk)</li>
                      <li>• Rail: Ikeja Train Station (10-minute walk)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        Schedule Visit Online
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <CalendarDays className="w-5 h-5 text-primary" />
                          Schedule Your Showroom Visit
                        </DialogTitle>
                      </DialogHeader>

                      {isScheduleConfirmed ? (
                        <div className="text-center py-8">
                          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                          <h3 className="text-xl font-medium text-foreground mb-2">Meeting Scheduled!</h3>
                          <p className="text-muted-foreground">
                            We've received your appointment request. You'll receive a confirmation email shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleScheduleMeeting} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="meeting-name">Name *</Label>
                              <Input
                                id="meeting-name"
                                value={meetingData.name}
                                onChange={(e) => handleMeetingInputChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="meeting-email">Email *</Label>
                              <Input
                                id="meeting-email"
                                type="email"
                                value={meetingData.email}
                                onChange={(e) => handleMeetingInputChange("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="meeting-phone">Phone Number *</Label>
                            <Input
                              id="meeting-phone"
                              type="tel"
                              value={meetingData.phone}
                              onChange={(e) => handleMeetingInputChange("phone", e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="meeting-type">Meeting Type *</Label>
                            <Select onValueChange={(value) => handleMeetingInputChange("meetingType", value)} required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select meeting type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="showroom-tour">Showroom Tour</SelectItem>
                                <SelectItem value="design-consultation">Design Consultation</SelectItem>
                                <SelectItem value="sales-meeting">Sales Meeting</SelectItem>
                                <SelectItem value="technical-discussion">Technical Discussion</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Preferred Date *</Label>
                              <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal bg-transparent"
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {meetingData.date ? format(meetingData.date, "PPP") : "Pick a date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={meetingData.date}
                                    onSelect={(date) => {
                                      handleMeetingInputChange("date", date)
                                      setIsDatePickerOpen(false)
                                    }}
                                    disabled={(date) => isPastDate(date) || isWeekend(date)}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div>
                              <Label htmlFor="meeting-time">Preferred Time *</Label>
                              <Select onValueChange={(value) => handleMeetingInputChange("time", value)} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="meeting-message">Additional Notes</Label>
                            <Textarea
                              id="meeting-message"
                              value={meetingData.message}
                              onChange={(e) => handleMeetingInputChange("message", e.target.value)}
                              rows={3}
                              placeholder="Any specific requirements or questions..."
                            />
                          </div>

                          <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-sm text-muted-foreground">
                              <strong>Note:</strong> Appointments are available Monday-Friday 8AM-6PM, Saturday 9AM-4PM.
                              We'll confirm your appointment within 2 hours.
                            </p>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            disabled={
                              !meetingData.name ||
                              !meetingData.email ||
                              !meetingData.phone ||
                              !meetingData.meetingType ||
                              !meetingData.date ||
                              !meetingData.time
                            }
                          >
                            Schedule Meeting
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call +234 (0) 809-123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-foreground mb-4">Manufacturing Facility</h2>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Agbara Industrial Estate</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Plot 45, Industrial Avenue</p>
                    <p>Agbara, Ogun State, Nigeria</p>
                    <p>Phone: +234 (0) 802-987-6543</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Facility Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• State-of-the-art modular construction equipment</li>
                    <li>• Quality control and testing laboratories</li>
                    <li>• Sustainable material processing center</li>
                    <li>• Logistics and distribution hub</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Showroom Visit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
              Schedule a Showroom Visit
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Experience our homes firsthand at our state-of-the-art showroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">What You'll Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Full-scale modular home displays</h4>
                      <p className="text-sm text-muted-foreground">
                        Walk through actual units to experience the space and quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Virtual reality design stations</h4>
                      <p className="text-sm text-muted-foreground">
                        Design and customize your home using our AI-powered platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Material samples and sustainability demonstrations
                      </h4>
                      <p className="text-sm text-muted-foreground">See and touch the sustainable materials we use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Expert consultations with our design team</h4>
                      <p className="text-sm text-muted-foreground">Get personalized advice from our housing experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">Book Your Appointment</h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Call our sales team at <span className="font-medium text-foreground">+234 (0) 809-123-4567</span> to
                    schedule your visit, or use our online booking system below.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Directions from Lagos Island</h4>
                    <p className="text-sm text-muted-foreground">
                      Take Third Mainland Bridge to Oworonsoki, follow Airport Road to Ikeja. Our showroom is located
                      opposite Computer Village.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Public Transportation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bus: Ikeja Bus Stop (5-minute walk)</li>
                      <li>• Rail: Ikeja Train Station (10-minute walk)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        Schedule Visit Online
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <CalendarDays className="w-5 h-5 text-primary" />
                          Schedule Your Showroom Visit
                        </DialogTitle>
                      </DialogHeader>

                      {isScheduleConfirmed ? (
                        <div className="text-center py-8">
                          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                          <h3 className="text-xl font-medium text-foreground mb-2">Meeting Scheduled!</h3>
                          <p className="text-muted-foreground">
                            We've received your appointment request. You'll receive a confirmation email shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleScheduleMeeting} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="meeting-name">Name *</Label>
                              <Input
                                id="meeting-name"
                                value={meetingData.name}
                                onChange={(e) => handleMeetingInputChange("name", e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="meeting-email">Email *</Label>
                              <Input
                                id="meeting-email"
                                type="email"
                                value={meetingData.email}
                                onChange={(e) => handleMeetingInputChange("email", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="meeting-phone">Phone Number *</Label>
                            <Input
                              id="meeting-phone"
                              type="tel"
                              value={meetingData.phone}
                              onChange={(e) => handleMeetingInputChange("phone", e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="meeting-type">Meeting Type *</Label>
                            <Select onValueChange={(value) => handleMeetingInputChange("meetingType", value)} required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select meeting type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="showroom-tour">Showroom Tour</SelectItem>
                                <SelectItem value="design-consultation">Design Consultation</SelectItem>
                                <SelectItem value="sales-meeting">Sales Meeting</SelectItem>
                                <SelectItem value="technical-discussion">Technical Discussion</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Preferred Date *</Label>
                              <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal bg-transparent"
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {meetingData.date ? format(meetingData.date, "PPP") : "Pick a date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={meetingData.date}
                                    onSelect={(date) => {
                                      handleMeetingInputChange("date", date)
                                      setIsDatePickerOpen(false)
                                    }}
                                    disabled={(date) => isPastDate(date) || isWeekend(date)}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div>
                              <Label htmlFor="meeting-time">Preferred Time *</Label>
                              <Select onValueChange={(value) => handleMeetingInputChange("time", value)} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="meeting-message">Additional Notes</Label>
                            <Textarea
                              id="meeting-message"
                              value={meetingData.message}
                              onChange={(e) => handleMeetingInputChange("message", e.target.value)}
                              rows={3}
                              placeholder="Any specific requirements or questions..."
                            />
                          </div>

                          <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-sm text-muted-foreground">
                              <strong>Note:</strong> Appointments are available Monday-Friday 8AM-6PM, Saturday 9AM-4PM.
                              We'll confirm your appointment within 2 hours.
                            </p>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            disabled={
                              !meetingData.name ||
                              !meetingData.email ||
                              !meetingData.phone ||
                              !meetingData.meetingType ||
                              !meetingData.date ||
                              !meetingData.time
                            }
                          >
                            Schedule Meeting
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call +234 (0) 809-123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-foreground mb-8">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Twitter className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Youtube className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-accent" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">WhatsApp Business: +234 (0) 809-123-4567</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
               <Image
                                   src="/easylogo.png"
                                   alt="logo"
                                   width={100}
                                   height={100}
                                   className="rounded-full"
                                 />
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Revolutionary housing solutions for modern Nigeria through sustainable, affordable modular construction.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="/home" className="hover:text-primary-foreground">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-primary-foreground">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary-foreground">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>123 Obafemi Awolowo Way</li>
                <li>Ikeja, Lagos State</li>
                <li>+234 (0) 1-234-5678</li>
                <li>info@easyhomes.ng</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Stay updated on new designs and sustainable living tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <button className="px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Easy Homes Nigeria Limited. All rights reserved. This website is for educational purposes only.

            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
