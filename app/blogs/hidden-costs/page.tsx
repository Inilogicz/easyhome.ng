import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Zap, Home, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "The Hidden Costs of Traditional Housing in Lagos | Naija Mod Homes",
  description:
    "A 10-year financial breakdown of what traditional housing in Lagos really costs, from rent and repairs to energy and flood damage.",
}

export default function CostsArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              The Hidden Costs of Traditional Housing in Lagos: A 10-Year
              Financial Breakdown
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              When Chinwe moved into her dream apartment, she thought she had
              made a smart financial decision. Five years later, she's spent
              an additional ₦3.8 million she never planned for.
            </p>
          </header>

          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/costs-calculator.png" // <-- REPLACE THIS IMAGE PATH
              alt="A calculator displaying the word COSTS"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg lg:prose-xl max-w-none text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <p>
              Chinwe's story isn't unique. Thousands of Lagos residents focus
              only on initial housing costs without calculating the real,
              long-term expenses of where they live. That initial figure is
              just the entry fee. It's like buying a car and only considering
              the purchase price while ignoring fuel, maintenance, and
              repairs.
            </p>
            <p>
              Let's break down what a typical Lagos resident actually spends
              over 10 years in a traditional housing setup.
            </p>

            <h2>The Real Numbers: A 10-Year Breakdown</h2>
            <p>
              For a standard 2-bedroom apartment in areas like Lekki, Ajah, or
              Victoria Island:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Initial Housing (Rent, Fees):</strong> ₦16.2 million
              </li>
              <li>
                <strong>Maintenance & Repairs:</strong> ₦3.6 million
              </li>
              <li>
                <strong>Flood-Related Expenses:</strong> ₦3.4 million
              </li>
              <li>
                <strong>Energy (NEPA, Generator, Fuel):</strong> ₦14.3 million
              </li>
              <li>
                <strong>Security Expenses:</strong> ₦2.8 million
              </li>
              <li>
                <strong>Relocation Costs:</strong> ₦1.8 million
              </li>
            </ul>

            <div className="p-6 bg-muted/50 rounded-xl my-8 border">
              <h3 className="text-2xl font-bold text-center !mt-0">
                Grand Total 10-Year Cost:
              </h3>
              <p className="text-5xl font-bold text-center text-primary mb-2">
                ₦42.1 million
              </p>
              <p className="text-center text-lg text-muted-foreground">
                That's ₦4.2 million per year—nearly three times what most
                people think they're spending on housing.
              </p>
            </div>

            <h2>The Hidden Opportunity Cost</h2>
            <p>
              We haven't even discussed opportunity cost—the money you could
              have invested elsewhere. If you had invested just ₦500,000
              annually (what most spend on generator fuel and maintenance
              alone) at a 10% annual return, you'd have{" "}
              <strong>₦8.7 million</strong> after 10 years. Instead, that
              money disappears into fuel tanks and repair bills.
            </p>

            <h2>What Makes These Costs So High?</h2>
            <ul className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Poor Infrastructure:</strong> When public utilities
                fail, individuals pay the price. No reliable electricity? You
                buy generators and fuel. Poor drainage? You pay for flood
                repairs.
              </li>
              <li>
                <strong>Climate Challenges:</strong> Lagos's intense rainy
                seasons cause repetitive damage that traditional buildings
                aren't designed to handle. You end up paying for the same
                repairs year after year.
              </li>
              <li>
                <strong>Inefficient Design:</strong> Traditional buildings
                waste energy. Poor insulation means higher cooling costs. No
                solar integration means complete dependence on expensive
                alternatives.
              </li>
            </ul>

            <h2>A Different Approach to Housing Costs</h2>
            <p>
              Now imagine a different scenario. What if your housing costs
              looked like this instead:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/solar-house.jpg" // <-- REPLACE THIS IMAGE PATH
                  alt="A modern house with solar panels on the roof"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <ul className="list-check pl-6 space-y-2 text-lg">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-secondary" />
                  Energy bills reduced by 70%
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-3 text-secondary" />
                  Zero generator fuel costs
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-secondary" />
                  Minimal flood repair costs
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-3 text-secondary" />
                  Expandable space (no relocation)
                </li>
              </ul>
            </div>
            <p>
              Suddenly, that 10-year cost drops from ₦42 million to something
              far more manageable, with the added benefit of ownership equity.
            </p>

            <h2>Your Financial Future Starts with Smart Housing</h2>
            <p>
              The difference between spending ₦42 million and ₦25 million over
              10 years is <strong>₦17 million</strong> that could change your
              financial trajectory. Your home should be an investment in your
              future, not a money pit that drains your resources year after
              year.
            </p>
          </div>

          {/* Article CTA */}
          <div className="mt-16 p-8 bg-secondary/10 rounded-2xl border border-secondary/20 text-center">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Calculate Your Real Housing Cost
            </h3>
            <p className="text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
              Want to understand your true housing costs? Use our free
              calculator to see what you're really spending—and discover how
              much you could save.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Schedule a Free Financial Consultation
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}