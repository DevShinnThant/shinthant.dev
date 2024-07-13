"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Loader = () => {
  const loadingRef = useRef(null)

  const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationFinished(true)
      },
    })
    tl.to(".counter", 0.01, {
      delay: 1.1,
      opacity: 0,
    })
    tl.to(".line", 1.5, {
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
      setCount((prevCount) => {
        if (prevCount === 10) {
          clearInterval(interval)
        }
        return prevCount + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={loadingRef} aria-hidden="true">
      {!isAnimationFinished && (
        <>
          <div className="absolute counter w-screen h-screen z-[10000] left-0 top-0 bg-black p-10 flex justify-end items-end text-[7rem] font-bold text-accentColor">
            {count}
          </div>
          <div className="fixed w-screen h-screen z-[9999] flex">
            {[...new Array(11)].map((_, index) => (
              <div key={index} className="line w-full h-full bg-black" />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Loader
