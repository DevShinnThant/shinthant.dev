import navlinks from "@/lib/navConfig"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed z-[1000] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]">
      <div className="w-full h-auto bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl font-jost">
              <span className="text-white hover:text-accentColor cursor-pointer">
                ShinThant
              </span>
              <span className="text-accentColor text-2xl font-bold">.dev</span>
            </Link>
          </div>
          <div className="col-span-4 m-auto">
            <div className="flex gap-[3rem] text-white items-center">
              {navlinks.map((link) => (
                <Link key={link.title} href={link.href} className="navlink">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex justify-end ">
            <button className="nav_btn ">
              <span className="nav_btn_line_1 " />
              <span className="nav_btn_line_2" />
              <span className="nav_btn_line_3" />
              <span className="nav_btn_line_4" />
              <div className="text-xs text-gray-300">Resume</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
