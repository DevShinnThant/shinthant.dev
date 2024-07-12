import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShinThant.Dev",
  description: "A Frontend Developer",
  applicationName: "Portfolio",
  authors: {
    name: "Shin Thant",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP", "ShadcnUI"],
  creator: "Shin Thant",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {/* <Loader /> */}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
