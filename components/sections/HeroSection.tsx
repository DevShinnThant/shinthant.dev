import Code from "@/app/assets/hero/code.png"
import HeroBG from "@/app/assets/hero/hero-bg.webp"
import HeroLines from "@/app/assets/hero/hero-lines.png"
import HeroSpinner from "@/app/assets/hero/hero-spinner.webp"
import Source from "@/app/assets/hero/source.png"
import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import SocialLinks from "../SocialLinks"
import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <div className="w-full bg-baseBackground min-h-screen pt-[4.5rem]">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <Image
          alt="test"
          className="select-none animate-animate-frame-hero-bg direction-alternate ease-linear running fill-mode-both"
          src={HeroBG}
        />
      </div>

      <Image
        className="w-[38rem] absolute select-none pointer-events-none left-[50%] translate-x-[-50%] top-[8.6rem]"
        alt="test"
        src={HeroLines}
      />

      <div className="max-w-[75rem]  min-h-[5rem] m-auto w-full mt-[8rem] absolute left-0 right-0 flex items-center justify-between">
        <div className="relative  w-[27rem] h-[27rem] flex justify-center items-center">
          <Image
            className="w-full h-full select-none pointer-events-none hero_spinner absolute top-0 left-0 right-0 bottom-0"
            src={HeroSpinner}
            alt="test"
          />
          <div className="w-20 h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
            <Image width={24} src={Source} alt="s" />
          </div>
        </div>

        <div className="relative w-[27rem] h-[27rem] flex justify-center items-center">
          <Image
            className="w-full h-full select-none pointer-events-none hero_spinner absolute top-0 left-0 right-0 bottom-0"
            src={HeroSpinner}
            alt="test"
          />
          <div className="w-20 h-20 bg-gradient-to-tl from-[#132726] to-[#13191B] shadow-md rounded-full flex justify-center items-center">
            <Image width={24} src={Code} alt="s" />
          </div>
        </div>
      </div>

      <div className="relative max-w-[55rem] mt-[11rem]  m-auto w-full flex flex-col gap-4 justify-center items-center">
        <div className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text  leading-none text-6xl font-semibold">
          It&apos;s Shinn Thant
        </div>
        <div className="text-4xl font-semibold">
          <span className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            A
          </span>{" "}
          <span className="text-accentColor">Front-End</span>{" "}
          <span className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
            Developer
          </span>
        </div>
        <div className="w-[370px] text-sm bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text">
          Passionate and detail-oriented frontend developer with a knack for
          creating visually appealing and user-friendly web interfaces
        </div>

        <div className="bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-transparent bg-clip-text text-lg">
          Where creativity meets functionality.
        </div>

        <Button className="contact_me_btn shadow-md mt-3 group flex items-center gap-2">
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

      <div className="absolute bottom-4 left-4">
        <div
          style={{
            writingMode: "vertical-lr",
          }}
          className="flex items-center gap-2 dark:text-gray-400"
        >
          <span className="text-sm tracking-widest">About</span>
          <ArrowDownIcon />
        </div>
      </div>

      <div className="absolute right-4 bottom-[20%]">
        <SocialLinks />
      </div>

      <div className="absolute bottom-4 right-4">
        <Link
          href="#project"
          className="flex items-center gap-2 dark:text-gray-400"
        >
          <span className="text-sm tracking-widest">View Project</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}
