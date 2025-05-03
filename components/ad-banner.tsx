interface AdBannerProps {
  text: string
}

export default function AdBanner({ text }: AdBannerProps) {
  return (
    <div className="ad-banner">
      <div className="marquee font-extrabold text-xl">{text}</div>
    </div>
  )
}
