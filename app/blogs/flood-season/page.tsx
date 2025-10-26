import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, Shield, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Signs Your Lagos Home Isn't Ready for Flood Season | Naija Mod Homes",
  description:
    "Learn the 5 critical signs of flood vulnerability and what you can do to protect your home and family in Lagos.",
}

export default function FloodArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              5 Signs Your Lagos Home Isn't Ready for Flood Season (And What to
              Do About It)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last year alone, over 15,000 homes across Lagos were affected by
              flooding. The question isn't whether it will happen again—it's
              whether your home is ready.
            </p>
          </header>

          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/blog/lagos-flood.jpg" // <-- REPLACE THIS IMAGE PATH
              alt="A car driving through a flooded street in Lagos"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg lg:prose-xl max-w-none text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <p>
              If you've lived in Lagos for more than a year, you know the
              drill. The skies darken, rain pours for hours, and before you
              know it, water is creeping into your compound. Many Lagos
              residents believe they're prepared because they've stacked
              sandbags or cleared their gutters. But flood preparedness goes
              deeper than that. Your home might be sending you warning signs
              that you're more vulnerable than you think.
            </p>
            <p>
              Let's walk through five critical signs that your home isn't
              flood-ready, and more importantly, what you can do about it.
            </p>

            <h2>Sign 1: Your Foundation Sits Below Street Level</h2>
            <p>
              Take a moment to look at your home from the street. Does your
              compound slope downward? Is your front door lower than the road?
              This is one of the biggest red flags for flood vulnerability.
              When heavy rains overwhelm Lagos's drainage systems, water
              naturally flows to the lowest points. If your foundation is
              below street level, your home becomes a collection pool for
              runoff water.
            </p>
            <p>
              <strong>What you can do:</strong> Start by improving your
              immediate drainage. Install proper channels that direct water
              away from your foundation. Consider raising doorway thresholds
              with waterproof barriers. For long-term solutions, explore
              elevated foundation options.
            </p>

            <h2>Sign 2: You've Experienced Water Damage Before</h2>
            <p>
              Here's an uncomfortable truth: if your home has flooded once, it
              will likely flood again. Many Lagos residents treat flooding as a
              one-time bad luck incident. But recurring flood damage isn't
              just inconvenient—it's expensive and dangerous. Water damage
              weakens your building's structure, creates perfect conditions
              for mold, and damages electrical systems, creating fire hazards.
            </p>
            <p>
              <strong>What you can do:</strong> Document every flooding
              incident. Take photos, note water levels, and track how long
              water took to recede. Install waterproof flooring in high-risk
              areas and move valuable electronics to elevated storage.
            </p>

            <h2>Sign 3: Your Neighbourhood Has Poor Drainage Infrastructure</h2>
            <p>
              Look around your street. Are the gutters clogged with refuse? Do
              drainage channels overflow even during light rain? Poor
              neighbourhood drainage directly affects your home's safety.
              Areas like Lekki, Ajah, Victoria Island, and parts of Surulere
              are particularly vulnerable.
            </p>
            <p>
              <strong>What you can do:</strong> Join or form a community
              drainage committee. In the meantime, create your own property
              drainage plan. Install gutters that direct roof water away from
              your home and keep your immediate environment clear of debris.
            </p>

            <h2>Sign 4: Your Emergency Evacuation Plan Is Unclear</h2>
            <p>
              Quick question: if flooding starts at 2 AM, do you know exactly
              what to do? Most Lagos families don't have clear evacuation
              plans. But flooding often happens fast. Panic, darkness, and
              rising water create dangerous situations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
              <div>
                <p>
                  <strong>What you can do:</strong> Create a household
                  emergency kit today. Include important documents (in
                  waterproof bags), medications, phone chargers, flashlights,
                  and cash. Designate a family meeting point outside your home
                  and practice your plan at least once before rainy season
                  starts.
                </p>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/blog/family-couch.jpg" // <-- REPLACE THIS IMAGE PATH
                  alt="A happy family sitting on a couch"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <h2>Sign 5: Your Electrical Systems Aren't Elevated</h2>
            <p>
              Here's a danger many people overlook: electrical systems
              positioned low in your home. Sockets near floor level and
              generators in low-lying areas create serious electrocution
              risks. When floodwater mixes with electricity, your home becomes
              a death trap.
            </p>
            <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-md my-8 max-w-md mx-auto">
              <Image
                src="/blog/emergency-kit.jpg" // <-- REPLACE THIS IMAGE PATH
                alt="An emergency preparedness kit"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p>
              <strong>What you can do:</strong> Audit your home's electrical
              setup now. Move sockets higher up walls where possible. Store
              generators on elevated platforms. Install ground fault circuit
              interrupters (GFCIs) that automatically shut off power when they
              detect water.
            </p>

            <h2>The Bigger Picture: Thinking Long-Term</h2>
            <p>
              These five signs point to a larger truth: many homes weren't
              designed for the climate challenges we face today. Smart Lagos
              residents are starting to think differently, asking: What if my
              home could adapt to flood conditions?
            </p>
            <p>
              The good news is that solutions exist. From improved drainage to
              elevated foundations, there are ways to make your home more
              resilient. The key is taking action before the next flood, not
              after.
            </p>
          </div>

          {/* Article CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Will You Be Ready?
            </h3>
            <p className="text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
              Flood preparedness isn't about fear—it's about smart planning.
              It's about protecting your family, your property, and your peace
              of mind.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2" />
                Schedule a Free Flood-Risk Consultation
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}