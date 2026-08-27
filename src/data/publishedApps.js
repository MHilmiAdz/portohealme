import notespackIcon from "../assets/images/notespack-icon.png";
import notespackDemo from "../assets/images/notespack-demo.png";

export const publishedApps = [
  {
    id: "notespack",
    title: "NotesPack",
    badge: "Production Release",
    tagline: "Simple Notes, Expense Tracker & Notes Organizer",
    description:
      "A clean Android application for writing simple notes, listing daily expenses with their prices, viewing monthly total spending, and browsing all your notes in an organized list.",
    icon: notespackIcon,
    previewImage: notespackDemo,
    status: "Live Release",
    version: "v1.0",
    tags: ["Android", "Jetpack Compose", "Kotlin", "Room DB", "Material 3"],
    highlights: [
      {
        icon: "📝",
        title: "General Notes",
        desc: "Save your thoughts, ideas, and simple notes.",
      },
      {
        icon: "💰",
        title: "Expense Tracker",
        desc: "List your purchased items and their prices.",
      },
      {
        icon: "📊",
        title: "Monthly Recap",
        desc: "Show total expenses for each month.",
      },
      {
        icon: "📋",
        title: "Notes List",
        desc: "View, manage, and browse all your saved notes.",
      },
    ],
    // Explicit full path for GitHub Pages routing
    showcaseUrl: "/portohealme/notespack/",
    privacyPolicyUrl: "/portohealme/notespack/privacy-policy/",
    playStoreUrl: "#",
  },
];
