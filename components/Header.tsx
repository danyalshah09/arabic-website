import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  language: "ar" | "en"
  toggleLanguage: () => void
  t: (key: string) => string
}

export function Header({ language, toggleLanguage, t }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#3A6351] bg-opacity-70 text-white backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-2"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 space-x-reverse">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("home")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("aboutFamily")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("familyNews")}
              </Button>
              <div className="mx-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="9" fill="#22c55e" opacity="0.9" />
                    <circle cx="18" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                    <circle cx="30" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                    <circle cx="24" cy="23" r="6" fill="#15803d" opacity="0.9" />
                    <circle cx="20" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                    <circle cx="28" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                    <rect x="22" y="28" width="4" height="10" fill="#92400e" />
                    <rect x="21" y="28" width="6" height="2" fill="#a3520e" />
                    <ellipse cx="24" cy="38" rx="8" ry="3" fill="#65a30d" opacity="0.6" />
                    <ellipse cx="24" cy="37" rx="6" ry="2" fill="#84cc16" opacity="0.8" />
                  </svg>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("library")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("familyMap")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent"
              >
                {t("contactUs")}
              </Button>
            </div>
          </div>

          {/* Mobile logo - centered */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="16" r="9" fill="#22c55e" opacity="0.9" />
                <circle cx="18" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                <circle cx="30" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                <circle cx="24" cy="23" r="6" fill="#15803d" opacity="0.9" />
                <circle cx="20" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                <circle cx="28" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                <rect x="22" y="28" width="4" height="10" fill="#92400e" />
                <rect x="21" y="28" width="6" height="2" fill="#a3520e" />
                <ellipse cx="24" cy="38" rx="8" ry="3" fill="#65a30d" opacity="0.6" />
                <ellipse cx="24" cy="37" rx="6" ry="2" fill="#84cc16" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Language toggle button */}
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white/50 hover:bg-white hover:text-[#3A6351] bg-white/10 backdrop-blur-sm px-3 py-1 text-sm"
              onClick={toggleLanguage}
            >
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
              </svg>
              {language === "ar" ? "EN" : "AR"}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-2 mt-4">
              {/* Mobile logo section */}
              <div className="flex justify-center py-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="9" fill="#22c55e" opacity="0.9" />
                    <circle cx="18" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                    <circle cx="30" cy="19" r="7" fill="#16a34a" opacity="0.8" />
                    <circle cx="24" cy="23" r="6" fill="#15803d" opacity="0.9" />
                    <circle cx="20" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                    <circle cx="28" cy="20" r="4" fill="#4ade80" opacity="0.7" />
                    <rect x="22" y="28" width="4" height="10" fill="#92400e" />
                    <rect x="21" y="28" width="6" height="2" fill="#a3520e" />
                    <ellipse cx="24" cy="38" rx="8" ry="3" fill="#65a30d" opacity="0.6" />
                    <ellipse cx="24" cy="37" rx="6" ry="2" fill="#84cc16" opacity="0.8" />
                  </svg>
                </div>
              </div>

              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("aboutFamily")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("familyNews")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("library")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("familyMap")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:underline text-sm font-medium hover:bg-transparent justify-start px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contactUs")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}