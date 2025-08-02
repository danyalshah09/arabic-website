import type React from "react"
import type { Metadata } from "next"
import { Changa } from "next/font/google"
import "./globals.css"

const changa = Changa({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Family Heritage Website",
  description: "A website dedicated to family genealogy and heritage",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={changa.className}>{children}</body>
    </html>
  )
}
