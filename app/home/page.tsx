import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, DollarSign, Leaf, Zap, Shield, Star, Home, Users, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-animate opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Revolutionary Housing Solutions
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              <span className="text-gradient">Build Your Dream Home</span>
              <br />
              <span className="text-foreground">in Just 7-14 Days</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-4xl mx-auto">
              Easy Homes transforms Nigerian housing with{" "}
              <span className="text-primary font-semibold">eco-friendly modular construction</span>, cutting-edge
              technology, and <span className="text-secondary font-semibold">50% cost savings</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Design Your Home Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <a href="/showroom">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
              >
                Visit Our Showroom
              </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Homes Built</div>
              </div>
              <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-2">7-14</div>
                <div className="text-sm text-muted-foreground">Days to Complete</div>
              </div>
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/modern-modular-home-in-lagos-nigeria-setting-with-.jpg"
              alt="Modern modular home in Lagos setting"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Modern Family Home - Lekki</h3>
                <p className="text-muted-foreground">Completed in 10 days • 3 bedrooms • Solar powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose <span className="text-gradient">Easy Homes</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of housing with our innovative approach to modular construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <DollarSign className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">50% Cost Reduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save significantly compared to traditional construction methods while maintaining premium quality and
                  modern amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">7-14 Day Assembly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Factory-built components enable rapid on-site assembly, getting you into your new home in record time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-success/20 hover:border-success/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-success/5 to-success/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Leaf className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Eco-Friendly Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solar panels, rainwater harvesting, and sustainable materials reduce environmental impact and utility
                  costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Customization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design your perfect home with our virtual reality platform and AI-powered customization tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-warning/20 hover:border-warning/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-warning/5 to-warning/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-warning rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-warning-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality Guaranteed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Factory-controlled production ensures consistent quality and precision in every component and
                  assembly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Award-Winning Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recognized for innovation in sustainable housing and modern architectural excellence across Nigeria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Housing Solutions</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              From student accommodation to family homes, we have the perfect modular solution for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="/student.png"
                  alt="Compact Student Unit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  ₦4-6M
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Compact Student Units</h3>
                <p className="text-muted-foreground mb-4">35-45 sqm • Perfect for students</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Efficient layouts with integrated study areas, perfect for tertiary institution students.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="/housing.png"
                  alt="Professional Housing Unit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  ₦12-16M
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Housing Units</h3>
                <p className="text-muted-foreground mb-4">65-85 sqm • For professionals</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Modern layouts with home office spaces, ideal for young professionals and couples.
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="/family.png"
                  alt="Family Home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  ₦18-25M
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Family Homes</h3>
                <p className="text-muted-foreground mb-4">120-180 sqm • For families</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Spacious multi-bedroom homes with private outdoor spaces for growing families.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Easy Homes made homeownership possible for our family. The process was transparent, fast, and the
                  quality exceeded our expectations."
                </p>
                <div>
                  <p className="font-medium text-foreground">Adebayo O.</p>
                  <p className="text-sm text-muted-foreground">Banking Professional, Lekki</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "As a student at University of Lagos, finding quality accommodation was always a challenge. Easy
                  Homes' student units provided the perfect study environment at an affordable price."
                </p>
                <div>
                  <p className="font-medium text-foreground">Kemi A.</p>
                  <p className="text-sm text-muted-foreground">Law Student, UNILAG</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The solar panels and water recycling system have reduced our utility bills by 75%. It's amazing how
                  technology can make homes both modern and sustainable."
                </p>
                <div>
                  <p className="font-medium text-foreground">Funmi T.</p>
                  <p className="text-sm text-muted-foreground">Tech Professional, Victoria Island</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Build Your <span className="text-gradient">Dream Home</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join hundreds of satisfied homeowners who chose Easy Homes for their housing solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Design
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
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
                  <Link href="/home" className="hover:text-primary-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary-foreground">
                    Products & Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground">
                    Contact Us
                  </Link>
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
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
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
