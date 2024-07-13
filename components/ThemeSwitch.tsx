"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSectionStore } from "@/store/section"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ThemeSwitch() {
  const { setTheme } = useTheme()
  const { section } = useSectionStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="dark:hover:bg-gray-800 hover:backdrop-opacity-10"
          variant="ghost"
          size="icon"
          aria-label="Switch Theme"
        >
          <SunIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              section === "#project" && "dark:text-black"
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-[1.2rem] text-white w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              section === "#project" && "dark:text-black"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[101]" align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light")
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark")
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system")
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
