"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Ecommerce from "@/public/assets/projects/ecommerce.png"
import GuessMyNumber from "@/public/assets/projects/guess-my-number.png"
import MiroClone from "@/public/assets/projects/miro-clone.png"
import Music from "@/public/assets/projects/music-app.png"
import PortfolioV2 from "@/public/assets/projects/portfolio-v2.png"
import VSCode from "@/public/assets/projects/vscode.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Good design is obvious. Great design is transparent.</div>
              <div>Design is not for philosophy, it&apos;s for life.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/ShinnTNT"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "VSCode Portfolio",
    description:
      "My portfolio website in vscode version developed with React and TypeScript.",
    techStacks: ["ReactJS", "TypeScript"],
    image: VSCode,
    githubURL: "https://github.com/ShinnTNT/vscode-portfolio",
    githubApi: "https://api.github.com/repos/ShinnTNT/vscode-portfolio",
  },
  {
    id: 2,
    title: "Exclusive Ecommerce",
    description:
      "A cutting-edge e-commerce web application designed to provide a seamless shopping experience.",
    techStacks: ["NextJS", "Strapi", "Radix UI"],
    image: Ecommerce,
    githubURL: "https://github.com/ShinnTNT/exclusive-ecommerce",
    githubApi: "https://api.github.com/repos/ShinnTNT/exclusive-ecommerce",
  },
  {
    id: 3,
    title: "Music Web App",
    description:
      "An innovative music web application that brings your favorite tunes to your fingertips.",
    techStacks: ["NextJS", "Strapi", "Radix UI"],
    image: Music,
    githubURL: "https://github.com/ShinnTNT/music-player",
    githubApi: "https://api.github.com/repos/ShinnTNT/music-player",
  },
  {
    id: 4,
    title: "Guess My Number",
    description:
      "An engaging web app created with vanilla JavaScript where users can test their luck and intuition by guessing a randomly generated number.",
    techStacks: ["Vanilla JavaScript", "CSS"],
    image: GuessMyNumber,
    githubURL: "https://github.com/ShinnTNT/Guess-My-Number",
    githubApi: "https://api.github.com/repos/ShinnTNT/Guess-My-Number",
  },
  {
    id: 5,
    title: "Portfolio V2",
    description:
      "A refined and enhanced showcase of my work, designed to highlight my skills and projects with a sleek and modern interface.",
    techStacks: ["NextJS", "ShadnUI", "GSAP"],
    image: PortfolioV2,
    githubURL: "https://github.com/ShinnTNT/shinthant.dev",
    githubApi: "https://api.github.com/repos/ShinnTNT/shinthant.dev",
  },
  {
    id: 6,
    title: "Miro Clone",
    description:
      "Enjoy a wide range of brushes, colors, and effects, along with layers, undo/redo functionality, and easy sharing options.",
    techStacks: ["NextJS", "ShadnUI", "Convex", "Clerk", "Liveblocks"],
    image: MiroClone,
    githubURL: "https://github.com/ShinnTNT/realtime-miro-clone",
    githubApi: "https://api.github.com/repos/ShinnTNT/realtime-miro-clone",
  },
]
