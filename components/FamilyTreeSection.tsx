import { useTranslation } from "@/lib/i18n"

interface FamilyTreeSectionProps {
  language: "ar" | "en"
  t: (key: string) => string
}

export function FamilyTreeSection({ language, t }: FamilyTreeSectionProps) {
  return (
    <section className="py-16 bg-green">

     <div className="container mx-auto border-black px-4">
     <div className="badge1 rounded-full bg-red-400 w-[8%] p-2 relative right-10 top-32">bg top right</div>
        <div className="badge1 rounded-full bg-red-600 w-[10%] p-2 relative right-60 top-105">bg bottom left</div>



        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-row relative mt-10">
<div className="bg-blue-500 rounded-[50px] w-[200px] h-[40vh] text-center z-20 relative top-15 -left-10">
  rect1
</div>
<div className="bg-blue-500 rounded-[50px] w-[300px] h-[40vh] text-center z-10 -ml-20">
  rect2
</div>
</div>
           <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3A6351] mb-6">{t("familyTreeTitle")}
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