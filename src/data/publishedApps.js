import notespackIcon from "../assets/images/notespack-icon.png";
import notespackDemo from "../assets/images/notespack-demo.png";
import screenNotes from "../assets/images/screen-notes.png";
import screenOcr from "../assets/images/screen-ocr.png";
import screenSplit from "../assets/images/screen-split.png";
import screenRecap from "../assets/images/screen-recap.png";
import screenDraw from "../assets/images/screen-draw.png";
import featureGraphic from "../assets/images/notespack-feature.png";

export const publishedApps = [
  {
    id: "notespack",
    title: "NotesPack",
    badge: "Production Release",
    tagline: "Your Second Brain Multitool — Notes, Expenses, Split Bill & Drawing",
    description:
      "A modern Android application engineered for writing rich notes, scanning paper receipts with on-device ML Kit OCR, splitting dining expenses with friends, sketching canvas ideas, and tracking monthly financial spending.",
    icon: notespackIcon,
    previewImage: notespackDemo,
    featureGraphic: featureGraphic,
    status: "Live Release",
    version: "v1.0",
    tags: ["Android", "Jetpack Compose", "Kotlin", "ML Kit OCR", "Room DB", "Material 3"],
    screens: [
      { id: "notes", name: "Rich Notes", image: screenNotes, desc: "Capture thoughts, ideas, and chapter drafts" },
      { id: "ocr",   name: "Receipt OCR", image: screenOcr,   desc: "Scan paper receipts and extract items automatically" },
      { id: "split", name: "Split Bill",  image: screenSplit, desc: "Divide dining and group bills with friends" },
      { id: "recap", name: "Monthly Recap", image: screenRecap, desc: "Track total monthly expenditures at a glance" },
      { id: "draw",  name: "Canvas Sketch", image: screenDraw,  desc: "Draw freehand diagrams, wireframes, and doodles" },
    ],
    highlights: [
      {
        icon: "📝",
        title: "Rich Notes",
        desc: "Save your thoughts, ideas, and long-form chapters with instant autosave.",
      },
      {
        icon: "📸",
        title: "Receipt Scanner",
        desc: "Snap & scan paper receipts with on-device ML Kit OCR without cloud delay.",
      },
      {
        icon: "💸",
        title: "Split Bill",
        desc: "Divide outing & restaurant expenses with friends by item or equal share.",
      },
      {
        icon: "📊",
        title: "Monthly Recap",
        desc: "Review total spending and itemized logs for each calendar month.",
      },
      {
        icon: "🎨",
        title: "Drawing Canvas",
        desc: "Sketch diagrams, UI wireframes, and geometric doodles freely.",
      },
      {
        icon: "🔒",
        title: "Private & Offline",
        desc: "Stored securely in an on-device Room SQLite database with zero cloud sync.",
      },
    ],
    // Explicit full path for GitHub Pages routing
    showcaseUrl: "/portohealme/notespack/",
    privacyPolicyUrl: "/portohealme/notespack/privacy-policy/",
    playStoreUrl: "#",
  },
];
