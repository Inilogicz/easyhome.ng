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
            About Naija Mod Homes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-4xl mx-auto mb-12">
            Revolutionizing Nigeria's housing sector through sustainable, affordable modular construction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">Flood-Resistant </div>
                <div className="text-sm text-muted-foreground">Telescopic metal pillars lift homes above floodwaters.</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2"> Portability</div>
                <div className="text-sm text-muted-foreground"> Easily uncoupled and transported by trailers.
</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">Smart Living</div>
                <div className="text-sm text-muted-foreground">Integrated with Google Home, solar, and IoT-enabled security.
</div>
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
               Naija Mod Homes was founded to provide climate-resilient, flexible, and affordable housing in Nigeria. With Lagos increasingly facing flash floods, our homes offer a safe and adaptable alternative—leveraging container-based modular design that can grow, move, and protect families.

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
                 To redefine housing in Nigeria by delivering portable, flood-proof, and tech-enabled modular homes that adapt to families, cities, and climate challenges.

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
                  To become Africa’s leading provider of resilient modular housing solutions, setting new standards in affordability, innovation, and sustainability.

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
                <h3 className="text-xl font-medium text-primary mb-4"> Resilience</h3>
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
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Founders and Leadership Team</h2>
            <p className="text-lg text-muted-foreground text-balance">Meet the visionaries behind Naija Mod Homes</p>
          </div>

          <div className=" mx-auto ">

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
                <p className="text-accent font-medium mb-4">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                 Idowu holds a B.Sc. in Business Administration from Kwara State University with three years of experience in developing resilient, sustainable, and affordable structures in flood-prone areas. His expertise in business administration, financial planning, and sustainable housing solutions uniquely positions him to lead Naija Mod Homes in delivering innovative and climate-resilient housing.

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
            <p className="text-lg text-muted-foreground text-balance">Our journey to revolutionize Nigerian housing amidst flood</p>
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
                   Company founded to address Lagos flood-resilient housing needs.
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
                  First flood-proof modular home installed in Lekki Phase 1.

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
                  Strategic partnerships with solar and IoT technology providers.
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
                <h3 className="font-medium text-foreground mb-2">Innovation in Climate-Resilent Housing</h3>
                <p className="text-sm text-muted-foreground">Lagos State Ministry of Housing</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Best Modular Housing Startup</h3>
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
