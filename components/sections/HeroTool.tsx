import { useEffect, useRef } from "react"
import Code from "@/public/assets/hero/code.png"
import HeroSpinner from "@/public/assets/hero/hero-spinner.webp"
import Source from "@/public/assets/hero/source.png"
import heroLottieData from "@/public/assets/lottie/hero-lottie.json"
import { gsap } from "gsap"
import Image from "next/image"
import Lottie from "react-lottie"

export default function HeroTool() {
  const firstSpinnerRef = useRef(null)
  const secondSpinnerRef = useRef(null)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  useEffect(() => {
    if (firstSpinnerRef.current && secondSpinnerRef.current) {
      gsap.to([firstSpinnerRef.current], {
        rotation: 70,
        duration: 30,
        repeat: -1,
      })

      gsap.to([secondSpinnerRef.current], {
        rotation: 70,
        duration: 30,
        repeat: -1,
      })
    }
  }, [])

  return (
    <div className="max-w-[75rem] min-h-[5rem] m-auto w-full mt-[24rem] md:mt-[8rem] absolute left-0 right-0 flex items-center justify-between">
      <div className="relative  w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        <div className="absolute hidden md:block left-[-10rem] bottom-[3rem] rotate-270">
          <Lottie options={defaultOptions} />
        </div>
        <Image
          ref={firstSpinnerRef}
          className="w-full h-full object-cover select-none pointer-events-none  absolute top-0 left-0 right-0 bottom-0"
          src={HeroSpinner}
          alt="hero-background"
        />
        <div className="w-14 h-14 absolute z-[1] md:w-20 md:h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image className="w-4 md:w-6" src={Source} alt="hero-background" />
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        <Image
          ref={secondSpinnerRef}
          className="w-full h-full rotate-180 object-cover select-none pointer-events-none hero_spinner absolute top-0 left-0 right-0 bottom-0"
          src={HeroSpinner}
          alt="hero-background"
        />
        <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image className="w-4 md:w-6" src={Code} alt="hero-background" />
        </div>
      </div>
    </div>
  )
}
