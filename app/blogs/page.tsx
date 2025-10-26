import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Naija Mod Homes",
  description:
    "Read our latest articles on flood-proof housing, modular living, and the hidden costs of traditional homes in Lagos.",
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 gradient-animate opacity-10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
              The <span className="text-gradient">Naija Mod Homes</span> Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insights on resilient housing, cost savings, and smart living in
              Nigeria. Learn how to protect your family and your finances.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Article 1 Card */}
          <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="aspect-video relative">
              <Image
                src="/blog/lagos-flood.jpg" // <-- REPLACE THIS IMAGE PATH
                alt="Flooded street in Lagos"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                5 Signs Your Lagos Home Isn't Ready for Flood Season (And What to
                Do About It)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Many Lagos residents believe they're prepared... but flood
                preparedness goes deeper than sandbags. Your home might be
                sending you warning signs.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-lg">
                <Link href="/blogs/flood-season">Read Full Article <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Article 2 Card */}
          <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="aspect-video relative">
              <Image
                src="/blog/costs-calculator.jpg" // <-- REPLACE THIS IMAGE PATH
                alt="Calculator showing costs"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                The Hidden Costs of Traditional Housing in Lagos: A 10-Year
                Financial Breakdown
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Thousands of Lagos residents focus only on initial rent...
                without calculating the real, long-term expenses. The numbers
                might surprise you.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg">
                <Link href="/blogs/hidden-costs">Read Full Article <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Rethink Your Housing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Stop worrying about floods and endless repair bills. Discover how a
            Naija Mod Home can save you millions and give you peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}