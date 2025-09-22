"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Users,
  Briefcase,
  GraduationCap,
  Eye,
  CheckCircle,
  Sparkles,
  Building,
  Calendar,
  MapPin,
  Clock,
  Phone,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Zap,
  Leaf,
  Shield,
  Lightbulb,
} from "lucide-react"

type ModelKey = "student" | "professional" | "family"

const models: Record<ModelKey, {
  name: string
  icon: React.ElementType
  color: string
  price: string
  size: string
  image: string
  features: string[]
}> = {
  student: {
    name: "Compact Student Unit",
    icon: GraduationCap,
    color: "primary",
    price: "₦4-6M",
    size: "35-45 sqm",
    image: "/compact-student-housing-unit-modern-design-nigeria.jpg",
    features: ["Murphy bed", "Study area", "Kitchenette", "Smart controls"],
  },
  professional: {
    name: "Professional Housing Unit",
    icon: Briefcase,
    color: "secondary",
    price: "₦12-16M",
    size: "65-85 sqm",
    image: "/professional-housing-unit-modern-apartment-nigeria.jpg",
    features: ["Home office", "Open living", "Premium finishes", "Solar power"],
  },
  family: {
    name: "Family Home",
    icon: Users,
    color: "accent",
    price: "₦18-25M",
    size: "120-180 sqm",
    image: "/family-home-modular-house-nigeria-three-bedroom-co.jpg",
    features: ["3-4 bedrooms", "Modern kitchen", "Outdoor space", "Water recycling"],
  },
}

export default function ShowroomPage() {
  const [selectedModel, setSelectedModel] = useState<ModelKey>("student")
  const [isVRActive, setIsVRActive] = useState(false)
  const [audioPlaying, setAudioPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                <Building className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 text-balance">
            Virtual Showroom
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto mb-12">
            Experience our modular homes in immersive detail. Explore every corner, feature, and finish from the comfort
            of your device.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-6 py-3 text-lg bg-primary text-white">360° Virtual Tours</Badge>
            <Badge className="px-6 py-3 text-lg bg-secondary text-white">AR Visualization</Badge>
            <Badge className="px-6 py-3 text-lg bg-accent text-white">Real-time Customization</Badge>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Choose Your Model
            </h2>
            <p className="text-xl text-muted-foreground">Select a home type to begin your virtual tour</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Object.entries(models).map(([key, model]) => {
              const IconComponent = model.icon
              const isSelected = selectedModel === key
              return (
                <Card
                  key={key}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    isSelected
                      ? `border-2 border-${model.color} shadow-2xl bg-gradient-to-br from-${model.color}/10 to-background`
                      : "border-border/50 hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedModel(key as ModelKey)}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${model.color} to-${model.color}/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className={`text-2xl font-medium text-${model.color} mb-4`}>{model.name}</h3>
                    <div className="flex justify-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="font-bold text-lg">{model.price}</div>
                        <div className="text-sm text-muted-foreground">Price range</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg">{model.size}</div>
                        <div className="text-sm text-muted-foreground">Floor area</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {model.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour Interface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Display */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/20 overflow-hidden shadow-2xl">
                <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={models[selectedModel].image || "/placeholder.svg"}
                    alt={models[selectedModel].name}
                    className="w-full h-full object-cover"
                  />

                  {/* VR Overlay */}
                  {isVRActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <Eye className="w-8 h-8" />
                        </div>
                        <p className="text-lg font-medium">VR Mode Active</p>
                        <p className="text-sm opacity-80">Move your device to look around</p>
                      </div>
                    </div>
                  )}

                  {/* Control Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={isVRActive ? "default" : "secondary"}
                        onClick={() => setIsVRActive(!isVRActive)}
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {isVRActive ? "Exit VR" : "VR Mode"}
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                        <Maximize className="w-4 h-4 mr-2" />
                        Fullscreen
                      </Button>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setAudioPlaying(!audioPlaying)}
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        {audioPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hotspots */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer shadow-lg">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      Kitchen Area
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-secondary rounded-full animate-pulse cursor-pointer shadow-lg">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      Living Space
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-accent rounded-full animate-pulse cursor-pointer shadow-lg">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      Smart Controls
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tour Navigation */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                {["Exterior", "Living Room", "Kitchen", "Bedroom"].map((room, index) => (
                  <Card key={room} className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4 text-center">
                      <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-2 flex items-center justify-center">
                        <Home className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium">{room}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium text-primary mb-4">{models[selectedModel].name}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-semibold">{models[selectedModel].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Floor Area:</span>
                      <span className="font-semibold">{models[selectedModel].size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Construction Time:</span>
                      <span className="font-semibold">7-14 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Energy Efficiency:</span>
                      <span className="font-semibold text-green-600">A+ Rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium text-secondary mb-4">Key Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">Smart home automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm">Eco-friendly materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm">Advanced security system</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">LED lighting throughout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium text-accent mb-4">Customization Options</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                      Change Wall Colors
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <div className="w-4 h-4 bg-amber-500 rounded-full mr-3"></div>
                      Flooring Options
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                      Kitchen Finishes
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                      Furniture Packages
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Visit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Visit Our Physical Showroom
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience our homes in person at our flagship location in Lagos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary">Showroom Interior</p>
                  <p className="text-sm text-muted-foreground">Full-scale model displays</p>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-secondary">Location</h3>
                      <p className="text-muted-foreground">123 Obafemi Awolowo Way, Ikeja, Lagos</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Opening Hours</p>
                        <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+234 (0) 1-234-5678</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <h4 className="text-lg font-medium text-accent mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Full-scale model home displays</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>VR design stations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Material and finish samples</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Expert consultation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Financing options discussion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 text-balance">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Schedule a personalized consultation or visit our showroom to experience Easy Homes in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-xl"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Visit Showroom
            </Button>
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white shadow-xl"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">EH</span>
                </div>
                <span className="font-medium">Easy Homes</span>
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
              © 2025 Easy Homes Nigeria Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
