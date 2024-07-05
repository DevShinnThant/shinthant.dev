"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Loader = () => {
  const loadingRef = useRef(null)

  useEffect(() => {
    gsap.to(".counter", 0.01, {
      delay: 1,
      opacity: 0,
    })
    gsap.to(".test", 1.5, {
      delay: 1,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    })
  }, [])

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={loadingRef} aria-hidden="true">
      <div className="absolute counter w-screen h-screen z-[10000] left-0 top-0 bg-black p-10 flex justify-end items-end text-[7rem] font-bold text-accentColor">
        {count}
      </div>
      <div className="fixed w-screen h-screen z-[9999] flex">
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
        <div className="test w-full h-full bg-black" />
      </div>
    </div>
    // <div
    //   className={clsx(
    //     "fixed transition-all bg-black top-0 left-0 w-screen h-screen z-[9999]"
    //   )}
    // >
    //   <div className="w-full h-full flex flex-col justify-center items-center">
    //     <Progress value={progress} className="w-[20%]  md:w-[15%] h-[6px]" />
    //   </div>
    // </div>
  )
}

export default Loader
