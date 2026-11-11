import notespackIcon from "../assets/images/notespack-icon.png";
import notespackShowcase from "../assets/images/notespack-showcase.webp";

const baseUrl = import.meta.env.BASE_URL || "/portohealme/";

export const publishedApps = [
  {
    id: "notespack",
    title: "NotesPack",
    badge: "Production Release",
    tagline: "A Note for Everything — 9 Smart Pocket Tools, 100% Local & Ad-Free",
    description:
      "An all-in-one Android pocket multitool engineered with Kotlin and Jetpack Compose—blending rich notes, voice dictation, multi-day travel itineraries, scalable recipes, on-device ML Kit receipt OCR, group split bills, subscription alarms, upgraded canvas drawing, and a biometric AES-256-GCM Vault.",
    icon: notespackIcon,
    previewImage: notespackShowcase,
    status: "Live Release",
    version: "v3.0.0",
    tags: ["Android", "Jetpack Compose", "Kotlin", "ML Kit OCR", "Room DB", "Material 3", "Play Billing", "AES-256-GCM"],
    highlights: [
      { icon: "notes", title: "Rich Notes & Lists" },
      { icon: "mic",   title: "Voice Dictation" },
      { icon: "map",   title: "Travel Itineraries" },
      { icon: "recipe", title: "Recipe Scaler" },
      { icon: "split", title: "Smart Split Bill" },
      { icon: "scan",  title: "Receipt OCR & Budget" },
      { icon: "bell",  title: "Subscriptions & Alerts" },
      { icon: "draw",  title: "Drawing Canvas" },
      { icon: "lock",  title: "FieldCipher Vault" },
    ],
    showcaseUrl: `${baseUrl}notespack/index.html`,
    privacyPolicyUrl: `${baseUrl}notespack/privacy-policy/index.html`,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.healme.notespack&pcampaignid=web_share",
  },
];
