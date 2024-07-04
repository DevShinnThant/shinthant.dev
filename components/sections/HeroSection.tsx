"use client"

import HeroLines from "@/public/assets/hero/hero-lines.png"
import heroLottieData from "@/public/assets/lottie/hero-lottie.json"
import Image from "next/image"
import Lottie from "react-lottie"
import SocialLinks from "../SocialLinks"
import HeroContent from "./HeroContent"
import HeroTool from "./HeroTool"

export default function HeroSection() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: heroLottieData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // }
  return (
    <div className="w-full bg-baseBackground min-h-screen pt-[4.5rem]">
      {/* <div className="absolute hidden md:block left-[-50px] top-[-14px] rotate-270">
        <Lottie options={defaultOptions} />
      </div> */}

      <Image
        className="w-[38rem] absolute select-none pointer-events-none left-[50%] translate-x-[-50%] top-[11.5rem] md:top-[8.6rem]"
        alt="hero-background"
        src={HeroLines}
      />

      <HeroTool />

      <HeroContent />

      <SocialLinks />
    </div>
  )
}
