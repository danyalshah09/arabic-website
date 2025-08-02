import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface MainContentSectionProps {
  language: "ar" | "en"
  t: (key: string) => string
}

export function MainContentSection({ language, t }: MainContentSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-6 ${language === "en" ? "lg:order-1" : ""}`}>
            <h2 className="text-3xl font-bold text-[#3A6351] mb-6">{t("familyName")}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>This is placeholder text for the family name content. It provides a general idea of how the text will appear on the page. You can replace this with actual content about the family's history, values, or any other relevant information.</p>
              <p>Feel free to expand on this section with more details. The current text is just a temporary filler to demonstrate the layout and design. Remember to update both the Arabic and English translations for consistency.</p>
            </div>
          </div>
          <div className={`relative max-w-md mx-auto ${language === "en" ? "lg:order-2" : ""}`}>
            <Card className=" shadow-lg relative">
              <div className="absolute -top-2 -left-2 z-10">
                <div className="w-10 h-10 bg-stone-400 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-[25%] right-[-4.5rem] transform -translate-y-1/2 z-10">
<div className="bg-gray-500 bg-opacity-90 text-white px-4 py-4 rounded-full flex items-center space-x-2 text-sm shadow-lg">
  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5l-4.24 4.24M7.76 16.24L3.52 20.48m12.96 0l-4.24-4.24M7.76 7.76L3.52 3.52" />
    </svg>
  </div>
  <span className="text-xs">{t("researchInstitute")}</span>
</div>
</div>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder-family.jpg"
                    alt={language === "ar" ? "صورة العائلة" : "Family Photo"}
                    width={380}
                    height={350}
                    className="w-full h-80 object-cover"
                    priority
                    quality={100}
                  />
<div className="absolute bottom-0 left-0 right-0 bg-stone-400/20 backdrop-blur-md rounded-full m-4 p-4 border border-stone-400/30">
<div className="flex flex-row">
<div className="w-8 h-8 bg-stone-600 rounded flex items-center justify-center ml-3">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
    </svg>
  </div>
  <div className="text-white">
    <p className="text-sm mb-1">
      {language === "ar"
        ? "هذا هو تجمع الخطابة... حيث تجتمع الجذور وتنمو الصحة"
        : "This is the gathering of heritage... where roots meet and health grows"}
    </p>
    <p className="text-xs opacity-80">
      {language === "ar" ? "منذ عقد من الزمن" : "Since a decade ago"}
    </p>
  </div>
</div>
</div>
                </div>
              </CardContent>
              <div className="absolute inset-0 rounded-lg border-4 border-[#3A6351] border-opacity-20 pointer-events-none"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}