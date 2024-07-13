"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import ComingSoon1 from "@/public/assets/blog/coming-soon-1.jpg"
import ComingSoon2 from "@/public/assets/blog/coming-soon-2.jpg"
import SpaceCat from "@/public/assets/blog/space-cat.webp"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowRight } from "iconsax-react"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import BlogCard from "../BlogCard"

export default function BlogSection() {
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
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView && setSection("#blog")
  }, [aboutSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Blog
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              I document my journey by writing blog posts about my projects and
              experiences.
            </div>
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              <div>Check out some of my latest entries below. 🚀</div>
            </div>
          </div>
        </div>

        <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} item={blog} />
          ))}
        </div>

        <Link
          href={"https://medium.com/@shinthantequi"}
          target="_blank"
          aria-label="Follow up on my medium account"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="text-accentColor navlink text-sm italic">
            Follow up on my medium
          </div>
          <ArrowRight color="white" size={15} />
        </Link>
      </div>
    </section>
  )
}

export interface Blog {
  id: number
  title: string
  description: string
  image: StaticImageData
  publishAt: string
  link: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Mystery of React Children Re-rendering",
    description:
      "Component rendering is important for the overall performance of the app. So, although it seems simple, I want to share the complex children render logic.",
    image: SpaceCat,
    publishAt: "2024, March 10",
    link: "https://medium.com/@shinthantequi/the-mystery-of-react-children-re-rendering-3544a68944f4",
  },
  {
    id: 2,
    title: "Testing 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti neque dolores ad provident magnam?",
    image: ComingSoon1,
    publishAt: "2022, March 10",
    link: "",
  },
  {
    id: 3,
    title: "Testing 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti neque dolores ad provident magnam?",
    image: ComingSoon2,
    publishAt: "2024, January 15",
    link: "",
  },
]
