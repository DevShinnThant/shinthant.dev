import navlinks from "@/lib/navConfig"
import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch"

export default function Header() {
  return (
    <header className="fixed z-50 top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]">
      <div className="w-full h-auto bg-gray-50 shadow-sm  dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
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
            <button className="nav_btn group hidden md:block">
              <span className="nav_btn_line_1" />
              <span className="nav_btn_line_2" />
              <span className="nav_btn_line_3" />
              <span className="nav_btn_line_4" />
              <div className="text-xs group-hover:text-white text-accentColor dark:text-gray-300">
                Resume
              </div>
            </button>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}
