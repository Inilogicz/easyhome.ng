import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Users,
  Briefcase,
  GraduationCap,
  Smartphone,
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Building,
} from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
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
            Products & Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto mb-12">
            Innovative modular housing solutions designed for every lifestyle and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Housing Types</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">₦4M+</div>
                <div className="text-sm text-muted-foreground">Starting Price</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">7-14</div>
                <div className="text-sm text-muted-foreground">Days to Build</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Portfolio Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              From student accommodation to family homes, we offer three distinct modular housing solutions
            </p>
          </div>

          <div className="mb-20">
            <Card className="border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-primary/5 to-background">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative">
                  <img
                    src="/student2.png"
                    alt="Compact Student Unit"
                    className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">Student Housing</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-primary">Compact Student Units</h3>
                      <p className="text-muted-foreground">Perfect for tertiary students</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">35-45</div>
                      <div className="text-sm text-muted-foreground">Square meters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">₦4-6M</div>
                      <div className="text-sm text-muted-foreground">Per unit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">₦350K</div>
                      <div className="text-sm text-muted-foreground">Annual rent</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    Designed specifically for tertiary institution students in Lagos, these efficient units maximize
                    space while providing all essential amenities for comfortable student living.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>One/two bedrooms</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span> home office</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>IoT-enabled security</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>balcony</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>modular expansion.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span>Solar power integration</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-6 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-3 text-lg">Case Study</h4>
                    <p className="text-muted-foreground">
                    Lekki Peninsula – Delivered 20 homes to young professionals, reducing housing costs by 40% while offering smart, flood-safe living.


                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg">
                      Learn More About CSU
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
                    >
                      Visit Showroom
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mb-20">
            <Card className="border-2 border-secondary/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-secondary/5 to-background">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative lg:order-2">
                  <img
                    src="/housing3.png"
                    alt="Professional Housing Unit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white">Professional Living</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-secondary">Young Professional Units (YPUs)</h3>
                      <p className="text-muted-foreground">Ideal for young professionals</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">60–80</div>
                      <div className="text-sm text-muted-foreground">Square meters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₦12-16M</div>
                      <div className="text-sm text-muted-foreground">Per unit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">40%</div>
                      <div className="text-sm text-muted-foreground">Cost reduction</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    Perfect for young professionals and couples, these units feature modern layouts optimized for
                    contemporary lifestyle with dedicated workspace areas.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>1-2 bedroom configurations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Dedicated home office</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Open-plan living areas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>85% utility cost reduction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Premium sustainable finishes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Private balcony/terrace</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Smart security systems</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span>Solar + battery backup</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-6 mb-6 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-3 text-lg">Case Study</h4>
                    <p className="text-muted-foreground">
                      Lekki Peninsula – Delivered 20 homes to young professionals, reducing housing costs by 40% while offering smart, flood-safe living.

                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-white shadow-lg">
                      Learn More About PHU
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-secondary/20 text-secondary hover:bg-secondary/5 bg-transparent"
                    >
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mb-20">
            <Card className="border-2 border-accent/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-accent/5 to-background">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative">
                  <img
                    src="/ffamily.png"
                    alt="Family Home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-white">Family Living</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-accent"> Family Expandable Homes (FEHs)</h3>
                      <p className="text-muted-foreground">Spacious homes for growing families</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">120-180</div>
                      <div className="text-sm text-muted-foreground">Square meters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₦18-25M</div>
                      <div className="text-sm text-muted-foreground">Per unit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">3-4</div>
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    Spacious homes designed for growing families and established professionals, featuring multiple
                    bedrooms and comprehensive sustainable living systems.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>3-4 bedroom configurations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Multiple bathroom facilities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Spacious living & dining</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Modern kitchen with island</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Private outdoor space</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Rainwater harvesting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Greywater recycling</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span>Multi-storey options</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 mb-6 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-3 text-lg">Success Story</h4>
                    <p className="text-muted-foreground">
                      Victoria Island – Built a 30-unit housing estate with expandable homes, saving families up to 60% in long-term costs.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white shadow-lg">
                      Learn More About Family Homes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/5 bg-transparent">
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground text-balance">Comprehensive solutions beyond just housing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-primary mb-6">AI-Powered Design Platform</h3>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Virtual reality home design experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Real-time cost calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    3D visualization and walkthrough
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Mobile app integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Professional architect consultation
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 text-white">
                  Try Design Platform
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-secondary/5 to-background">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-secondary mb-6">Property Management</h3>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Build-to-rent portfolio management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Maintenance and upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Tenant relations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Investment opportunities
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-secondary/90 text-white">
                  Investment Opportunities
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-accent/5 to-background">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-accent mb-6">Smart Home Integration</h3>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    IoT device installation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Home automation systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Energy monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Security system integration
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-accent to-accent/90 text-white">
                  Smart Home Features
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 text-balance">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Explore our modular housing solutions and discover which option fits your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl"
            >
              Design Your Home Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-xl"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              className="px-10 py-4 text-lg bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white shadow-xl"
            >
              Visit Showroom
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
