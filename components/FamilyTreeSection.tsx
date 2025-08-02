import { useTranslation } from "@/lib/i18n"

interface FamilyTreeSectionProps {
  language: "ar" | "en"
  t: (key: string) => string
}

export function FamilyTreeSection({ t }: FamilyTreeSectionProps) {
      return (
        <section >
          <div className="container mx-auto border-black px-4 mb-40">
            <div className="badge1 rounded-full bg-red-400 w-[100px] p-2 relative right-20 top-32">bg top right</div>
            <div className="badge1 rounded-full bg-red-600 w-[200px] p-2 relative right-60 top-105 text-center">bg bottom left</div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-row relative mt-10 align-center">
                {/* Background image container covering both rectangles */}
                <div
                  className="absolute bg-red-400 inset-0 rounded-[50px] bg-cover bg-center bg-no-repeat opacity-30 z-0"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                      <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="treePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="15" fill="#22c55e" opacity="0.3"/>
                            <circle cx="60" cy="40" r="12" fill="#16a34a" opacity="0.4"/>
                            <circle cx="40" cy="70" r="10" fill="#15803d" opacity="0.3"/>
                            <rect x="48" y="80" width="4" height="20" fill="#92400e" opacity="0.4"/>
                          </pattern>
                          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#f0fdf4" stop-opacity="0.8"/>
                            <stop offset="50%" stop-color="#dcfce7" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="#bbf7d0" stop-opacity="0.4"/>
                          </radialGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#bgGradient)"/>
                        <rect width="100%" height="100%" fill="url(#treePattern)"/>
                        <g transform="translate(200,150)">
                          <circle r="80" fill="#22c55e" opacity="0.2"/>
                          <circle cx="-30" cy="-20" r="25" fill="#16a34a" opacity="0.3"/>
                          <circle cx="30" cy="-20" r="25" fill="#16a34a" opacity="0.3"/>
                          <circle cx="0" cy="20" r="30" fill="#15803d" opacity="0.3"/>
                          <rect x="-3" y="60" width="6" height="40" fill="#92400e" opacity="0.4"/>
                        </g>
                      </svg>
                    `)}`
                  }}
                />

                <div className="bg-blue-500 rounded-[50px] w-[200px] h-[40vh] text-center z-20 relative top-15 -left-10 flex items-center justify-center text-white font-semibold">
                  rect1
                </div>
                <div className="bg-blue-500 rounded-[50px] w-[300px] h-[40vh] text-center z-10 -ml-20 flex items-center justify-center text-white font-semibold">
                  rect2
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#3A6351] mb-6">
                  {t("familyTreeTitle")}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>This section will display information about the family tree and lineage. You can provide details about the family's origins, notable ancestors, and historical events that shaped their heritage.</p>
                  <p>Consider including a brief overview of the family's history, significant achievements, and any traditions or customs that are important to the family. This placeholder text can be replaced with rich, informative content.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}