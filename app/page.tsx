import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import MouseSection from "@/components/sections/MouseSection"
import ProjectSection from "@/components/sections/ProjectSection"

export default function Home() {
  return (
    <main id="main" className="scroll-smooth">
      <MouseSection />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
