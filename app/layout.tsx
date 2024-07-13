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
  openGraph: {
    type: "website",
    url: "https://devshinthant.vercel.app/",
    title: "Shinthant.Dev",
    description:
      "Portfolio website developed with NextJS, TypeScript, ShadcnUI & GSAP.",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://i.ibb.co/WPdvqTr/Screenshot-2024-07-13-at-11-07-07-AM.png",
      },
    ],
  },
  twitter: {
    card: "app",
    site: "https://devshinthant.vercel.app/",
    creator: "ShinThant",
    images: "https://i.ibb.co/WPdvqTr/Screenshot-2024-07-13-at-11-07-07-AM.png",
  },
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
        <Loader />

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
