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
          <div className="flex items-center bg-primary text-primary-foreground p-1 rounded-full">
            <Link href="/home" className="flex items-center space-x-2">
              <Image
                src="/easylogo.png"
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
              <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-accent transition-colors">
                Products & Services
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                Disclaimer
              </Link>
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
