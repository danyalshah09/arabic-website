import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface FooterProps {
  language: "ar" | "en"
  t: (key: string) => string
}

export function Footer({ language, t }: FooterProps) {
  return (
    <footer className="bg-[#3A6351] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className={`flex items-center mb-4 ${language === "ar" ? "" : "flex-row-reverse"}`}>
              <div className={`w-8 h-8 flex items-center justify-center ${language === "ar" ? "ml-3" : "mr-3"}`}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-400"
                >
                  <circle cx="20" cy="15" r="8" fill="#4ade80" />
                  <circle cx="15" cy="18" r="6" fill="#22c55e" />
                  <circle cx="25" cy="18" r="6" fill="#22c55e" />
                  <circle cx="20" cy="22" r="5" fill="#16a34a" />
                  <rect x="18" y="25" width="4" height="8" fill="#92400e" />
                  <ellipse cx="20" cy="33" rx="6" ry="2" fill="#65a30d" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t("familyTreeComplete")}</h3>
                <p className="text-sm">{t("footerDescription")}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t("treeAndDiagram")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("familyNews")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("services")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t("quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("aboutFamily")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("library")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200">
                  {t("services")}
                </a>
              </li>
            </ul>
          </div>
<div>
            <h3 className="text-lg font-bold mb-4">{t("contactUsFooter")}</h3>
            <p className="text-sm mb-4">{t("contactDescription")}</p>
            <div
className={`flex justify-center items-center gap-x-3 mt-4 ${
  language === "ar" ? "flex-row-reverse" : ""
}`}
>
<Button
  size="icon"
  variant="outline"
  className="w-10 h-10 rounded-full flex items-center justify-center text-white border-white hover:bg-white hover:text-[#3A6351] bg-transparent"
>
  <Facebook className="h-4 w-4" />
</Button>
<Button
  size="icon"
  variant="outline"
  className="w-10 h-10 rounded-full flex items-center justify-center text-white border-white hover:bg-white hover:text-[#3A6351] bg-transparent"
>
  <Instagram className="h-4 w-4" />
</Button>
<Button
  size="icon"
  variant="outline"
  className="w-10 h-10 rounded-full flex items-center justify-center text-white border-white hover:bg-white hover:text-[#3A6351] bg-transparent"
>
  <Twitter className="h-4 w-4" />
</Button>
</div>
          </div>
        </div>
        <div className="border-t border-[#2d4d3e] mt-8 pt-8 text-center">
          <p className="text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}