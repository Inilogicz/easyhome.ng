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
            Get in Touch with Naija Mod Homes
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
                    <p>45 Admiralty Way</p>
                    <p>Lekki Phase 1,</p>
                    <p>Lagos, Nigeria</p>
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
     
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                     <Image
                                         src="data:image/jpeg;base64,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"
                                         alt="logo"
                                         width={100}
                                         height={100}
                                         className="rounded-full"
                                       />
                    </div>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      Flood-Proof, Portable Homes Designed for Nigeria’s Changing Climate
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
                      <li>45 Admiralty Way</li>
                      <li> Lekki Phase 1,</li>
                      <li> Lagos, Nigeria</li>
                      <li>+234 (0) 1-456-7890</li>
                      <li>info@naijamodhomes.ng</li>
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
                    © 2025 Naija Mod Homes.All rights reserved. This website is for educational purposes only.
      
      
                  </p>
                  </div>
              </div>
            </footer>
    </div>
  )
}
