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
      "An all-in-one Android pocket multitool engineered with Kotlin and Jetpack Compose—blending rich notes, voice dictation, multi-day travel itineraries, scalable recipes, a built-in OCR camera for receipts & QR codes, group split bills, subscription alarms, drawing canvas, and a private PIN & fingerprint Vault.",
    icon: notespackIcon,
    previewImage: notespackShowcase,
    status: "Live Release",
    version: "v3.0.0",
    tags: ["Android", "Jetpack Compose", "Kotlin", "OCR Camera", "Room DB", "Material 3", "Play Billing", "Private Vault"],
    highlights: [
      { icon: "notes", title: "Rich Notes & Lists" },
      { icon: "mic",   title: "Voice Dictation" },
      { icon: "map",   title: "Travel Itineraries" },
      { icon: "recipe", title: "Recipe Scaler" },
      { icon: "split", title: "Smart Split Bill" },
      { icon: "scan",  title: "Built-In OCR Camera" },
      { icon: "bell",  title: "Subscriptions & Alerts" },
      { icon: "draw",  title: "Drawing Canvas" },
      { icon: "lock",  title: "PIN & Biometric Vault" },
    ],
    showcaseUrl: `${baseUrl}notespack/index.html`,
    privacyPolicyUrl: `${baseUrl}notespack/privacy-policy/index.html`,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.healme.notespack&pcampaignid=web_share",
  },
];
