import { IMAGES } from "@/constants/images"

interface HeroSectionProps {
  t: (key: string) => string
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.HERO_BACKGROUND})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-2">{t("aboutFamilyTitle")}</h1>
        <p className="text-lg">{t("breadcrumb")}</p>
      </div>
    </section>
  )
}