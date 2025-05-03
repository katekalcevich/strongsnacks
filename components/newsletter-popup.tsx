"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === "/"

    if (isHomePage) {
      // Show popup after 5 seconds on home page
      const timer = setTimeout(() => {
        // Check if user has already seen the popup
        const hasSeenPopup = localStorage.getItem("hasSeenPopup")
        if (!hasSeenPopup) {
          setIsVisible(true)
        }
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Set flag in localStorage
    localStorage.setItem("hasSeenPopup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Submitted email:", email)
    setIsSubmitted(true)
    // Close popup after 2 seconds
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <div className={`newsletter-popup ${isVisible ? "show" : ""}`}>
      <div className="newsletter-content">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-primary mb-4">THANKS FOR SUBSCRIBING!</h3>
            <p>Your first protein recipe pack is on its way to your inbox.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">GET 10 FREE RECIPES</h3>
              <p className="text-lg">
                Join our newsletter and receive our exclusive 3-ingredient protein snack recipe pack!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="brutalist-box-sm"
                />
              </div>
              <Button type="submit" className="w-full brutalist-box-sm">
                GET MY FREE RECIPES
              </Button>
            </form>

            <p className="text-xs text-center mt-4 text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </>
        )}
      </div>
    </div>
  )
}
