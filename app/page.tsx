"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { MainContentSection } from "@/components/MainContentSection"
import { FamilyTreeSection } from "@/components/FamilyTreeSection"
import { Footer } from "@/components/Footer"

export default function Component() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  const { t } = useTranslation(language)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }

  return (
    <div className="min-h-screen bg-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header language={language} toggleLanguage={toggleLanguage} t={t} />
      <HeroSection t={t} />
      <MainContentSection language={language} t={t} />
      <FamilyTreeSection language={language} t={t} />
      <Footer language={language} t={t} />
    </div>
  )
}
