import AboutSection from "@/components/sections/AboutSection"
import BlogSection from "@/components/sections/BlogSection"
import HeroSection from "@/components/sections/HeroSection"
import MouseSection from "@/components/sections/MouseSection"
import ProjectSection from "@/components/sections/ProjectSection"

export default function Home() {
  return (
    <main id="main">
      <MouseSection />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
    </main>
  )
}
