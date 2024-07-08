"use client"

import { useEffect, useRef, useState } from "react"
import ShinThantImage from "@/public/image__1_-removebg-preview.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { RoughNotation } from "react-rough-notation"

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const [onViewPort, setOnViewPort] = useState<boolean>(false)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        onEnter: () => {
          setOnViewPort(true)
          gsap.to(q(".title"), {
            // x: 100,
          })
        },
        onLeave: () => {
          setOnViewPort(false)
        },
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#161D1F] h-[740px] flex items-center justify-center"
    >
      <div className="w-full max-w-5xl flex items-center gap-10">
        <div className="flex flex-col gap-12 w-full">
          <div className="w-28 h-5">
            <RoughNotation
              show={onViewPort}
              color="hsl(157, 87%, 41%)"
              type="highlight"
            >
              <div className="dark:text-white text-2xl font-medium">
                About me
              </div>
            </RoughNotation>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="dark:text-white">
              With over 2 years of experience as a frontend developer, I
              specialize in crafting responsive and user-friendly web
              applications. I excel in creating intuitive interfaces and enjoy
              working in collaborative, agile environments.
            </div>

            <div className="dark:text-white text-sm">
              My Educational background.
            </div>
            <div className="flex gap-1 flex-col items-start">
              <div className="text-accentColor">NCC Education</div>
              <div className="dark:text-white text-sm italic">
                Joined Level 3 Program to embark on an enriching educational
                journey designed to build a solid foundation in key subjects.
              </div>
            </div>
          </div>

          <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-20">
            <div className="flex flex-col items-start">
              <div className="text-4xl font-medium dark:text-white">
                2 <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Experiences</div>
            </div>

            <div className="flex flex-col font-medium items-start">
              <div className="text-4xl dark:text-white">
                15 <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Completed Projects</div>
            </div>

            <div className="flex flex-col font-medium items-start">
              <div className="text-4xl dark:text-white">
                110 <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Users</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="relative w-[310px] h-[310px]">
            <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-1" />
            <Image
              className="absolute z-10 shadow-sm rounded-sm"
              width={310}
              height={310}
              alt="shin thant's profile"
              src={ShinThantImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
