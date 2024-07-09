"use client"

import { useEffect, useRef } from "react"
import Circle from "@/public/assets/about/circle.svg"
import Triangle from "@/public/assets/about/triangle.svg"
import ShinThantImage from "@/public/shin-thant.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import SplitType from "split-type"

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    })

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          })

          tl.fromTo(
            q(".image-animation"),
            {
              x: 200,
            },
            {
              x: 0,
            }
          )

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            }
          )

          tl.to(q(".experience-count"), {
            innerText: 2,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          })

          tl.to(
            q(".project-count"),
            {
              innerText: 15,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          )

          tl.to(
            q(".user-count"),
            {
              innerText: 30,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          )
        },
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#161D1F] overflow-x-hidden py-14 px-[5%] md:h-[740px] flex items-center justify-center"
    >
      <div className="w-full max-w-[1100px] flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
        <div className="w-full flex flex-col gap-7 md:gap-9 ">
          <div className="title dark:text-accentColor text-3xl md:text-4xl font-medium">
            About me
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="overflow-hidden">
              <div className="dark:text-white text-animation">
                With over 2 years of experience as a frontend developer, I
                specialize in crafting responsive and user-friendly web
                applications. I excel in creating intuitive interfaces and enjoy
                working in collaborative, agile environments.
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="dark:text-white text-animation">
                My Educational background.
              </div>
            </div>
            <div className="flex gap-1 flex-col items-start">
              <div className="text-accentColor">NCC Education</div>
              <div className="overflow-hidden">
                <div className="dark:text-white text-animation">
                  Joined Level 3 Program to embark on an enriching educational
                  journey designed to build a solid foundation in key subjects.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-medium dark:text-white">
                <span className="experience-count">0</span>{" "}
                <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Experiences</div>
            </div>

            <div className="flex flex-col font-medium items-center">
              <div className="text-3xl md:text-4xl dark:text-white">
                <span className="project-count">0</span>{" "}
                <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Completed Projects</div>
            </div>

            <div className="flex flex-col font-medium items-center">
              <div className="text-3xl md:text-4xl dark:text-white">
                <span className="user-count">0</span>{" "}
                <span className="text-accentColor">+</span>
              </div>
              <div className="dark:text-white text-sm">Contributions</div>
            </div>
          </div>
        </div>
        <div className="w-full image-animation h-full flex justify-center">
          <div className="relative w-[260px] h-[240px] lg:w-[300px] lg:h-[262px]">
            <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
            <Image
              className="absolute z-10 w-full h-full shadow-sm rounded-sm"
              width={300}
              height={262}
              priority
              alt="shin thant's profile"
              src={ShinThantImage}
            />
          </div>
        </div>
      </div>

      <Backgrounds />
    </section>
  )
}

const Backgrounds = () => {
  return (
    <>
      {/* Triangle */}
      <div className="absolute hidden lg:block top-[25%] right-[17%]">
        <Image
          className="pointer-events-auto select-none"
          width={30}
          height={30}
          alt="triangle background"
          src={Triangle}
        />
      </div>
      {/* Triangle */}

      {/* Stars */}
      <div className="absolute hidden lg:block bottom-[14%] left-[9%]">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M17.5 15l.625 1.875L20 17.5l-1.875.625L17.5 20l-.625-1.875L15 17.5l1.875-.625L17.5 15zM6 17l.25.75L7 18l-.75.25L6 19l-.25-.75L5 18l.75-.25L6 17zM11 4l1.5 4.5L17 10l-4.5 1.5L11 16l-1.5-4.5L5 10l4.5-1.5L11 4z"
            stroke="#5550FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      {/* Stars */}

      {/* Circle */}
      <div className="absolute hidden lg:block bottom-[26%] right-[42%]">
        <Image
          className="pointer-events-auto select-none"
          width={18}
          height={18}
          alt="circle background"
          src={Circle}
        />
      </div>
      {/* Circle */}

      {/* Signs */}
      <div className="absolute hidden lg:block bottom-[30%] right-2 md:bottom-[20%] md:right-[15%]">
        <svg
          width="93"
          height="49"
          viewBox="0 0 93 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.91 4.63c-.275.597-.509 1.214-.83 1.784-2.077 3.665-4.74 6.865-8.02 9.491a12.334 12.334 0 01-4.118 2.157c-2.67.786-4.645-.776-4.64-3.563.002-1.415.349-2.838.582-4.25.188-1.118.444-2.228.329-3.603-.584.403-1.214.753-1.752 1.215-3.57 3.072-7.157 6.128-10.673 9.26-4.895 4.357-9.71 8.807-14.615 13.152-1.631 1.444-3.411 2.725-5.176 4.006-.71.516-1.526.94-2.357 1.212-1.93.628-3.478-.41-3.55-2.448-.04-1.065.15-2.192.482-3.21.821-2.533 1.794-5.013 2.683-7.526 1.708-4.827 3.45-9.644 5.059-14.507.548-1.657.73-3.432 1.08-5.156l-.404-.3c-.68.368-1.435.642-2.023 1.117-2.124 1.714-4.264 3.42-6.269 5.269-9.669 8.898-18.397 18.678-26.828 28.737-2.327 2.774-4.592 5.601-6.905 8.383-.608.734-1.28 1.418-1.964 2.087-.516.51-1.154.874-1.783.222-.561-.577-.164-1.125.239-1.623.73-.903 1.473-1.795 2.183-2.712 8.823-11.431 18.442-22.151 28.806-32.196 3.33-3.229 6.886-6.226 10.415-9.236C43.88 1.523 45.108.82 46.35.304c1.552-.647 2.741.033 3.042 1.69.191 1.05.231 2.204.022 3.243-.555 2.742-1.135 5.49-1.976 8.154-1.502 4.752-3.213 9.44-4.817 14.16-.479 1.413-.894 2.842-1.032 4.59.597-.34 1.244-.614 1.781-1.032 2.16-1.668 4.35-3.306 6.41-5.092 7.329-6.347 14.6-12.76 21.917-19.122 1.182-1.03 2.455-1.955 3.714-2.889.905-.67 1.908-1.168 3.037-.542 1.113.614 1.28 1.746 1.235 2.849-.057 1.426-.268 2.85-.424 4.273-.131 1.212-.283 2.422-.432 3.698 1.11.357 1.869-.136 2.532-.667 1.439-1.146 2.826-2.355 4.212-3.569 1.794-1.573 3.553-3.192 5.361-4.746.478-.41 1.09-.665 1.641-.99l.323.314.013.004z"
            fill="#5550FF"
          ></path>
        </svg>
      </div>
      {/* Signs */}

      {/* Alerts */}
      <div className="absolute hidden lg:block right-2 rotate-180 md:rotate-0 bottom-[60%] md:left-[9.5%] md:top-[18%]">
        <svg
          width="45"
          height="37"
          viewBox="0 0 45 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      {/* Alerts */}
    </>
  )
}
