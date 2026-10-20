import notespackIcon from "../assets/images/notespack-icon.png";
import notespackShowcase from "../assets/images/notespack-showcase.png";

const baseUrl = import.meta.env.BASE_URL || "/portohealme/";

export const publishedApps = [
  {
    id: "notespack",
    title: "NotesPack",
    badge: "Production Release",
    tagline: "Your Second Brain Multitool — Notes, Expenses, Split Bill & Drawing",
    description:
      "A modern Android application engineered for writing rich notes, scanning paper receipts with on-device ML Kit OCR, splitting dining expenses with friends, sketching canvas ideas, and tracking monthly financial spending.",
    icon: notespackIcon,
    previewImage: notespackShowcase,
    status: "Live Release",
    version: "v1.0",
    tags: ["Android", "Jetpack Compose", "Kotlin", "ML Kit OCR", "Room DB", "Material 3"],
    highlights: [
      { icon: "📝", title: "Rich Notes" },
      { icon: "📸", title: "Receipt Scanner" },
      { icon: "💸", title: "Split Bill" },
      { icon: "📊", title: "Monthly Recap" },
      { icon: "🎨", title: "Drawing Canvas" },
      { icon: "🔒", title: "Private & Offline" },
    ],
    showcaseUrl: `${baseUrl}notespack/index.html`,
    privacyPolicyUrl: `${baseUrl}notespack/privacy-policy/index.html`,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.healme.notespack&pcampaignid=web_share",
  },
];
