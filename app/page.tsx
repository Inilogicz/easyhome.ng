"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, AlertTriangle, Home, Sparkles, Shield } from "lucide-react"
import Image from "next/image"
export default function DisclaimerPage() {
  const [accepted, setAccepted] = useState(false)

  const handleContinue = () => {
    window.location.href = "/home"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
             <Image
                 src="/easylogo.png"
                  alt="logo"
                  width={100}
                   height={100}
                  className="rounded-full"
                               />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
            Easy Homes Nigeria
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
            Revolutionary Housing Solutions for Modern Nigeria
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-primary">7-14 Day Construction</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium text-secondary">Eco-Friendly Materials</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-accent">AI-Powered Design</span>
            </div>
          </div>
        </div>

        <Card className="border-2 border-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 shadow-2xl backdrop-blur-sm bg-background/95">
          <CardContent className="p-8 md:p-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Educational Disclaimer
              </h2>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-medium text-primary mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  Important Notice
                </h3>

                <div className="space-y-6">
                  <p className="text-lg">
                    The information provided on this website is intended for{" "}
                    <span className="font-semibold text-primary">educational purposes only</span>. While every effort
                    has been made to ensure the accuracy and reliability of the content, the university does not
                    guarantee its completeness or effectiveness. This website will be deactivated once the course is
                    completed.
                  </p>

                  <p className="text-lg">
                    Some images used on this site have been sourced from the internet and are included for educational
                    and practice purposes only. If you are the copyright owner of any image and believe it has been used
                    without proper attribution, please contact us, and we will make the necessary corrections.
                  </p>

                  <p className="text-lg">
                    The views expressed on this site do not necessarily reflect the official policies or positions of
                    the university. The university is not responsible for any errors or omissions or the results
                    obtained from using this information.
                  </p>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="font-semibold text-accent text-lg">
                      By using this website, you acknowledge and agree to these terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center p-8 bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl">
              <label className="flex items-center gap-4 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="w-6 h-6 text-primary bg-background  border-primary/30 rounded-md focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {accepted && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-sm"></div>
                    </div>
                  )}
                </div>
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                  I acknowledge and agree to these terms
                </span>
              </label>

              <Button
                onClick={handleContinue}
                disabled={!accepted}
                className="px-10 py-4 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Website
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
            © 2025 Easy Homes Nigeria Limited. All rights reserved. This website is for educational purposes only.

          </p>
        </div>
      </div>
    </div>
  )
}
