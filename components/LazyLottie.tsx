import { Suspense, lazy } from "react"
import { type LottieComponentProps } from "lottie-react"
import { Skeleton } from "./ui/skeleton"

const LazyLottieComponent = lazy(() => import("lottie-react"))

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>
  id: string
}

export function LazyLottie<T extends Record<string, unknown>>({
  getAnimationData,
  id,
  ref,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, "animationData">) {
  const data = getAnimationData()

  if (!data) return <Skeleton />

  return (
    <Suspense fallback={<Skeleton />}>
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  )
}
