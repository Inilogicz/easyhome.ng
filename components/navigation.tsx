"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  text-primary-foreground p-1 rounded-full">
            <Link href="/home" className="flex items-center space-x-2">
              <Image
                src="data:image/jpeg;base64,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"
                alt="Easy Homes Nigeria Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/home" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/blogs" className="text-foreground hover:text-accent transition-colors">
                Blogs
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-accent transition-colors">
                Products & Services
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
              {/* <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                Disclaimer
              </Link> */}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Design Your Home</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border/50">
              <Link href="/home" className="block px-3 py-2 text-foreground hover:text-accent">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-muted-foreground hover:text-accent">
                About Us
              </Link>
              <Link href="/products" className="block px-3 py-2 text-muted-foreground hover:text-accent">
                Products & Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-muted-foreground hover:text-accent">
                Contact Us
              </Link>
              <Link href="/" className="block px-3 py-2 text-muted-foreground hover:text-accent">
                Disclaimer
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Design Your Home
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
