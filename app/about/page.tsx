import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Eye, Heart, Lightbulb, Leaf, Users, Shield, Building, Sparkles } from "lucide-react"
import Image from "next/image"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
            About Easy Homes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto mb-12">
            Revolutionizing Nigeria's housing sector through sustainable, affordable modular construction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7-14</div>
                <div className="text-sm text-muted-foreground">Days to Build</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">3M+</div>
                <div className="text-sm text-muted-foreground">Housing Gap in Lagos</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly Materials</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8 text-balance">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Easy Homes was founded with a mission to revolutionize Nigeria's housing sector through sustainable,
                affordable modular construction. Recognizing Lagos State's 3 million housing unit shortage, we developed
                innovative solutions that combine international best practices with local materials and cultural
                preferences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our approach addresses the critical housing gap while promoting environmental sustainability and
                economic accessibility for Nigeria's growing middle class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-primary mb-6">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To develop innovative, affordable, and environmentally friendly housing solutions that make cities
                  better in Nigeria through modular homes that reduce construction costs, minimize environmental impact,
                  and deliver faster while maintaining quality and style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-secondary mb-6">Vision Statement</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide West Africa with the most eco-friendly modular homes, raising industry standards for
                  quality, affordability, and environmental responsibility while tackling housing shortages in major
                  cities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground text-balance">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging AI and VR technology for superior customer experience
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-secondary/5 to-background">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium text-secondary mb-4">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Environmental responsibility through local materials and renewable energy
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-accent/5 to-background">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium text-accent mb-4">Affordability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Making quality housing accessible to middle-class families
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Factory-controlled production ensuring consistent excellence
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-secondary/5 to-background">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium text-secondary mb-4">Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting local suppliers and creating employment opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Leadership Team</h2>
            <p className="text-lg text-muted-foreground text-balance">Meet the visionaries behind Easy Homes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/ceo.png"
                    alt="Blessing Adenike Olayade"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Blessing Adenike Olayade</h3>
                <p className="text-accent font-medium mb-4">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brings five years of healthcare management experience with expertise in process optimization, quality
                  service delivery, and stakeholder management. Holds a Bachelor of Arts from Lagos State University and
                  PSW Certification from Alpha Career College.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Image
                    src="/goodness.png"
                    alt="Blessing Adenike Olayade"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Goodness Ajala</h3>
                <p className="text-accent font-medium mb-4">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Animal Scientist (B.Sc. from Federal University of Agriculture Abeokuta) with specialized training in
                  Environmental Sustainability. As Project Lead at Integrated Agri-Eco Farm, achieved 30% cost reduction
                  in livestock facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Image
                    src="/olaoluwa.png"
                    alt="Blessing Adenike Olayade"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Olaoluwa Shola Idowu</h3>
                <p className="text-accent font-medium mb-4">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Holds a B.Sc. in Business Administration from Kwara State University with three years of experience in
                  AI and Large Language Model applications. Combines financial expertise with advanced AI knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Company Milestones</h2>
            <p className="text-lg text-muted-foreground text-balance">Our journey to revolutionize Nigerian housing</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                 <Image
                    src="/easylogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Company Founded</h3>
                <p className="text-muted-foreground">
                  Easy Homes established with mission to address Lagos housing crisis through innovative modular
                  construction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                    src="/easylogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Manufacturing Facility Secured</h3>
                <p className="text-muted-foreground">
                  Secured manufacturing facility location in Agbara Industrial Estate for modular home production.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
               <Image
                    src="/easylogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">AI Platform Development</h3>
                <p className="text-muted-foreground">
                  Developed AI-powered home design platform with VR integration for enhanced customer experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
               <Image
                    src="/easylogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  Established strategic partnerships with local material suppliers to ensure sustainable sourcing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
               <Image
                    src="/easylogo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Flagship Showroom</h3>
                <p className="text-muted-foreground">
                  Opened flagship showroom in Ikeja, Lagos, featuring full-scale modular home displays and VR design
                  stations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Awards & Recognition</h2>
            <p className="text-sm text-muted-foreground mb-8">
              *As this is an educational project, awards listed are hypothetical
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Innovation in Sustainable Housing</h3>
                <p className="text-sm text-muted-foreground">Lagos State Ministry of Housing</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Best New Technology Integration</h3>
                <p className="text-sm text-muted-foreground">Nigerian Construction Industry Awards</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Environmental Excellence Recognition</h3>
                <p className="text-sm text-muted-foreground">Lagos State Environmental Protection Agency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
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
              © 2025 Easy Homes Nigeria Limited. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
