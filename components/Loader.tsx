"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"
import { Progress } from "@/components/ui/progress"

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i >= 100) {
        clearInterval(timer)
      } else {
        setProgress((prev) => prev + 2)
        i += 2
      }
    }, 50) // Slowing down the interval for a smoother progress
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={clsx(
        "fixed transition-all bg-black top-0 left-0 w-screen h-screen z-[9999]",
        progress === 100 && "z-[-1]"
      )}
    >
      <div className="w-full h-full flex justify-center items-center">
        <Progress value={progress} className="w-[15%]" />
      </div>
    </div>
  )
}

export default Loader
