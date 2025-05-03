"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AdBanner from "@/components/ad-banner"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log(formState)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-primary">GET IN TOUCH</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-accent mb-6">CONTACT US</h2>
          <p className="text-lg mb-6">
            Have questions about our recipes? Want to suggest a new 3-ingredient combo? Or maybe you're interested in
            working with us? We'd love to hear from you!
          </p>

          <div className="brutalist-box-sm p-6 bg-white mb-6">
            <h3 className="text-secondary mb-4">EMAIL</h3>
            <p className="text-lg">hello@strongsnacks.com</p>
          </div>

          <div className="brutalist-box-sm p-6 bg-white mb-6">
            <h3 className="text-secondary mb-4">SOCIAL</h3>
            <p className="text-lg mb-2">Instagram: @strongsnacks</p>
            <p className="text-lg mb-2">TikTok: @strongsnacks</p>
            <p className="text-lg">YouTube: Strong Snacks Official</p>
          </div>
        </div>

        <div className="brutalist-box p-8 bg-white">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-primary mb-4">MESSAGE SENT!</h3>
              <p className="text-lg mb-6">Thanks for reaching out. We'll get back to you as soon as possible.</p>
              <Button onClick={() => setIsSubmitted(false)} className="brutalist-box-sm">
                SEND ANOTHER MESSAGE
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-secondary mb-6">MESSAGE US</h2>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold">
                  NAME
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="brutalist-box-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold">
                  EMAIL
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="brutalist-box-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-bold">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="brutalist-box-sm"
                />
              </div>

              <Button type="submit" className="w-full brutalist-box-sm">
                SEND MESSAGE
              </Button>
            </form>
          )}
        </div>
      </div>

      <AdBanner text="FOLLOW US ON INSTAGRAM FOR DAILY PROTEIN RECIPES AND WORKOUT TIPS" />

      <div className="brutalist-box p-8 bg-secondary/10 mb-16">
        <h2 className="text-secondary mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">DO YOU OFFER COACHING?</h3>
            <p>
              Yes! We offer personalized nutrition coaching for athletes and fitness enthusiasts. Contact us for
              details.
            </p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">CAN I SUBMIT A RECIPE?</h3>
            <p>We love featuring community recipes. Send us your favorite 3-ingredient protein snack.</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">DO YOU SHIP PRODUCTS?</h3>
            <p>We don't sell physical products yet, but we're working on a line of protein supplements. Stay tuned!</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">WHERE ARE YOU LOCATED?</h3>
            <p>We're based in Austin, Texas, but our team works remotely across the United States.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
