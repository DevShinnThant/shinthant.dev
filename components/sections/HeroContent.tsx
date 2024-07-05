import { useEffect, useRef } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Button } from "../ui/button"

export default function HeroContent() {
  const sectionRef = useRef(null)
  const q = gsap.utils.selector(sectionRef)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const textAnimationTimeline = gsap.timeline({
      defaults: { stagger: 0.2, duration: 0.3 },
    })

    textAnimationTimeline.fromTo(
      q(".text-animation"),
      {
        y: 100,
      },
      {
        y: 0,
        delay: 2.8,
      }
    )
    textAnimationTimeline.fromTo(
      ".bio-animation ",
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "back",
        duration: 0.3,
      }
    )
  }, [q])

  return (
    <div
      ref={sectionRef}
      className="relative max-w-[55rem]  mt-[7rem] md:mt-[11rem] m-auto w-full flex flex-col gap-4 justify-center items-center"
    >
      <div className="overflow-hidden">
        <div className="text-animation bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text  leading-none text-4xl md:text-6xl font-semibold">
          It&apos;s Shinn Thant
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="text-animation  text-2xl md:text-4xl font-semibold">
          <span className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            A
          </span>{" "}
          <span className="text-accentColor">Front-End</span>{" "}
          <span className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            Developer
          </span>
        </div>
      </div>

      <div className="w-[300px] relative z-30  text-center md:w-[370px] text-sm bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
        Passionate and detail-oriented frontend developer with a knack for
        creating visually appealing and user-friendly web interfaces
      </div>

      <div className="bio-animation bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text text-md md:text-lg">
        Where creativity meets functionality.
      </div>

      <Button className="contact_me_btn shadow-md mt-12 md:mt-3 group flex items-center gap-2">
        <div className="dark:text-black relative z-[3]">Contact Me</div>
        <div className="contact_me_btn_overlay group-hover:opacity-100" />

        <div className="relative group overflow-hidden w-4 z-[3]">
          <div className="flex group-hover:animate-animate-frame-contact-me-btn-icon  translate-x-[-100%]">
            <ArrowRightIcon className="text-black flex-none relative z-[3]" />
            <ArrowRightIcon className="text-black flex-none relative z-[3]" />
          </div>
        </div>
      </Button>
    </div>
  )
}
