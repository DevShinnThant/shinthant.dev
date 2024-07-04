import { LazyLottie } from "../LazyLottie"

export default function HeroLottie() {
  return (
    <div className="absolute hidden md:block left-[-50px] top-[-14px] rotate-270">
      <LazyLottie
        getAnimationData={() =>
          import("@/public/assets/lottie/hero-lottie.json")
        }
        loop
        id="hero-lottie"
      />
    </div>
  )
}
