import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You! | Naija Mod Homes",
  description: "Your submission has been received.",
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <CheckCircle className="w-24 h-24 text-success mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your submission has been received. Our team will get back to you
            shortly.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}