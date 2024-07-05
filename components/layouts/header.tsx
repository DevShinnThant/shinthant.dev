"use client"

import { useEffect, useRef } from "react"
import navlinks from "@/lib/navConfig"
import gsap from "gsap"
import Link from "next/link"
import ResumeBtn from "../ResumeBtn"
import ThemeSwitch from "../ThemeSwitch"

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2.8, ease: "Power0.easeNone" }
    )
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed z-50 top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
    >
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl">
              <span className="dark:text-white hover:text-accentColor cursor-pointer">
                ShinThant
              </span>
              <span className="text-accentColor font-bold">.dev</span>
            </Link>
          </div>
          <div className="col-span-4 hidden md:block m-auto">
            <div className="flex gap-[3rem] items-center">
              {navlinks.map((link) => (
                <Link key={link.title} href={link.href} className="navlink">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex justify-end gap-10">
            <ResumeBtn />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}
