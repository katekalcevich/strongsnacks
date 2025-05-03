"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function VideoAd() {
  const [isVisible, setIsVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClose = () => {
    setIsVisible(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    // Add a slight delay before starting the animation
    const timer = setTimeout(() => {
      const adElement = document.getElementById("exercise-ad")
      if (adElement) {
        adElement.classList.add("animate-in")
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      id="exercise-ad"
      className="brutalist-box bg-white p-4 my-12 mx-auto max-w-4xl overflow-hidden transition-all duration-500 opacity-0 translate-y-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-accent font-bold text-xl">POWER UP YOUR WORKOUTS</h3>
        <button onClick={handleClose} className="text-gray-500 hover:text-black" aria-label="Close advertisement">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative brutalist-box-sm overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onClick={togglePlay}
            className="w-full h-auto cursor-pointer"
          >
            <source
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/workout.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white" onClick={togglePlay}>
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pause"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary text-2xl md:text-3xl font-bold">STRONG WORKOUT APP</h2>
          <p className="text-lg">
            Track your workouts, monitor your progress, and reach your fitness goals faster with the companion app to
            Strong Snacks.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-accent mr-3"></span>
              Custom workout plans based on your goals
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-accent mr-3"></span>
              Track your protein intake and macros
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-accent mr-3"></span>
              Access to all Strong Snacks recipes
            </li>
          </ul>
          <div className="pt-4">
            <Button asChild size="lg" className="brutalist-box-sm">
              <Link href="#">DOWNLOAD NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
