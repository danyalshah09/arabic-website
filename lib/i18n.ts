export interface Translations {
  [key: string]: {
    ar: string
    en: string
  }
}

export const translations: Translations = {
  // Navigation
  home: { ar: "الرئيسية", en: "Home" },
  aboutFamily: { ar: "عن العائلة", en: "About Family" },
  familyNews: { ar: "أخبار العائلة", en: "Family News" },
  library: { ar: "المكتبة", en: "Library" },
  familyMap: { ar: "خريطة العائلة", en: "Family Map" },
  contactUs: { ar: "تواصل معنا", en: "Contact Us" },

  // Hero Section
  aboutFamilyTitle: { ar: "عن العائلة", en: "About Family" },
  breadcrumb: { ar: "الرئيسية | عن العائلة", en: "Home | About Family" },

  // Main Content
  familyName: { ar: "اسم العائلة", en: "Family Name" },
  familyTreeTitle: { ar: "شجرة العائلة والنسب", en: "Family Tree and Lineage" },

  // Card Content
  researchInstitute: { ar: "مؤسسة الأبحاث والدراسات", en: "Research & Studies Institute" },
  cardDescription: {
    ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    en: "This text is an example that can be replaced in the same space",
  },
  since2020: { ar: "منذ عام ٢٠٢٠", en: "Since 2020" },

  // Family Tree
  nobleLineage: { ar: "شجرة النسب الشريف", en: "Noble Family Tree" },
  familyTreeDescription: {
    ar: "شجرة النسب الشريف - عائلة كريمة لها تاريخ عريق",
    en: "Noble Family Tree - A noble family with a rich history",
  },

  // Footer
  contactUsFooter: { ar: "تواصل معنا", en: "Contact Us" },
  contactDescription: {
    ar: "يمكن التواصل مع إدارة الموقع عبر وسائل التواصل الاجتماعي",
    en: "You can contact the site management through social media",
  },
  treeAndDiagram: { ar: "الشجرة ومخططها", en: "Tree & Diagram" },
  privacyPolicy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  services: { ar: "الخدمات", en: "Services" },
  quickLinks: { ar: "روابط سريعة", en: "Quick Links" },
  familyTreeComplete: { ar: "شجرة العائلة كاملة بما يخت", en: "Complete Family Tree" },
  footerDescription: {
    ar: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    en: "This text is an example that can be replaced in the same space, generated from the Arabic text generator",
  },
  copyright: {
    ar: "جميع الحقوق محفوظة لموقع شجرة العائلة ٢٠٢٤",
    en: "All rights reserved to Family Tree Website 2024",
  },
  familyTreeNote: {
    ar: "ملحوظة: اضغط لتنزيل الشجرة بجودة عالية",
    en: "Note: Click to download high-quality tree",
  },
}

export const useTranslation = (language: "ar" | "en") => {
  const t = (key: string) => translations[key]?.[language] || key
  return { t }
}