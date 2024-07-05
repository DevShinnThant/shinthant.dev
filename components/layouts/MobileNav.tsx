import { useState } from "react"
import navlinks from "@/lib/navConfig"
import { HambergerMenu } from "iconsax-react"
import Link from "next/link"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "../ui/button"

export default function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <Drawer
      open={opened}
      onClose={() => setOpened(false)}
      onOpenChange={(open) => setOpened(open)}
    >
      <DrawerTrigger asChild className="block md:hidden">
        <Button
          className="dark:text-white px-2 flex justify-center items-center"
          variant="default"
        >
          <HambergerMenu />
          <span className="sr-only">Toggle Navbar</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[50%]">
        <div className="py-20 w-full flex flex-col absolute z-10 gap-10 items-center">
          {navlinks.map((navLink) => (
            <Link
              href={navLink.href}
              className="dark:text-white hover:dark:text-accentColor"
              key={navLink.title}
              onClick={() => {
                setOpened(false)
              }}
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
