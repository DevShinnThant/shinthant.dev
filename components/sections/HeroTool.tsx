import { useEffect, useRef } from "react"
import Code from "@/public/assets/hero/code.png"
import HeroSpinner from "@/public/assets/hero/hero-spinner.webp"
import Source from "@/public/assets/hero/source.png"
import { gsap } from "gsap"
import Image from "next/image"

export default function HeroTool() {
  const firstSpinnerRef = useRef(null)
  const secondSpinnerRef = useRef(null)

  useEffect(() => {
    if (firstSpinnerRef.current && secondSpinnerRef.current) {
      gsap.to([firstSpinnerRef.current, secondSpinnerRef.current], {
        rotation: 70,
        duration: 30,
        repeat: -1,
      })
    }
  }, [])

  return (
    <div className="max-w-[75rem] min-h-[5rem] m-auto w-full mt-[8rem] absolute left-0 right-0 flex items-center justify-between">
      <div className="relative w-[27rem] h-[27rem] flex justify-center items-center">
        <Image
          ref={firstSpinnerRef}
          className="w-full  h-full select-none pointer-events-none  absolute top-0 left-0 right-0 bottom-0"
          src={HeroSpinner}
          alt="test"
        />
        <div className="w-20 h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image priority width={24} src={Source} alt="s" />
        </div>
      </div>

      <div className="relative w-[27rem] h-[27rem] flex justify-center items-center">
        <Image
          ref={secondSpinnerRef}
          className="w-full h-full select-none pointer-events-none hero_spinner absolute top-0 left-0 right-0 bottom-0"
          src={HeroSpinner}
          alt="test"
        />
        <div className="w-20 h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
          <Image width={24} src={Code} alt="s" />
        </div>
      </div>
    </div>
  )
}
