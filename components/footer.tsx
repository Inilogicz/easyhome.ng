import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://www.freeiconspng.com/uploads/house-top-icon-png-11.png"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Flood-Proof, Portable Homes Designed for Nigeria’s Changing
              Climate
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/" className="hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary-foreground">
                  Blogs
                </Link>
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
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary-foreground">
                  Blog
                </Link>
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
            © 2025 Naija Mod Homes.All rights reserved. This website is for
            educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}