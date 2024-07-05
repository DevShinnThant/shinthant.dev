"use client"

import HeroLines from "@/public/assets/hero/hero-lines.png"
import Image from "next/image"
import SocialLinks from "../SocialLinks"
import HeroContent from "./HeroContent"
import HeroTool from "./HeroTool"

export default function HeroSection() {
  return (
    <div className="w-full bg-baseBackground min-h-screen pt-[4.5rem]">
      <Image
        className="w-[38rem] absolute select-none pointer-events-none left-[50%] translate-x-[-50%] top-[7.5rem] md:top-[8.6rem]"
        alt="hero-background"
        src={HeroLines}
      />

      <HeroTool />

      <HeroContent />

      <SocialLinks />
    </div>
  )
}
