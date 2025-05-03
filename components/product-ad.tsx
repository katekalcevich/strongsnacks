import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductAdProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaText: string
  ctaLink: string
  bgColor?: string
}

export default function ProductAd({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  bgColor = "bg-white",
}: ProductAdProps) {
  return (
    <div className={`brutalist-box ${bgColor} p-4 my-8 overflow-hidden`}>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="md:w-1/3">
          <div className="brutalist-box-sm overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-2/3 space-y-3">
          <span className="inline-block bg-accent text-white px-3 py-1 mb-1 text-sm font-bold">SPONSORED</span>
          <h3 className="text-primary text-xl font-bold">{title}</h3>
          <p>{description}</p>
          <Button asChild className="brutalist-box-sm">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
