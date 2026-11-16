import notespackShowcase from "../assets/images/notespack-showcase.webp";
import dicodingExpert from "../assets/images/dicoding-android-expert.webp";
import dicodingIntermediate from "../assets/images/dicoding-android-intermediate.webp";
import dicodingFundamental from "../assets/images/dicoding-android-fundamental.webp";
import dicodingBeginner from "../assets/images/dicoding-android-beginner.webp";
import gradRector from "../assets/images/grad-rector.webp";
import practicumAssistantfilkom from "../assets/images/practicumassist.webp";
import bangkitAcademycohort from "../assets/images/bangkitcert.webp";
import plpsmkn2malang from "../assets/images/plp2smk2malang.webp";
import svvrsmkn3batu from "../assets/images/svvrsmk3batu.webp";
import coddmtahfidzgrad from "../assets/images/coddm.webp";
import itdevdc from "../assets/images/dc2024itdev.webp";
import sekrependptq from "../assets/images/sekrependptq.webp";
import kbmptiddmcert from "../assets/images/ddmcert.webp";
import tahfidzcampwaco from "../assets/images/wacomultmed.webp";

export const experience = [
    {
      title: "Creator & Android Developer — NotesPack",
      company: "ProjectsHealme · Google Play (v3.0.0)",
      period: "2026",
      details: "Designed, built, and published NotesPack (com.healme.notespack) on Google Play through v3.0.0. Engineered 9 local-first productivity and personal finance modules in Kotlin and Jetpack Compose—including rich notes, voice dictation, multi-day travel itineraries, scalable recipes, built-in OCR camera for receipts and QR reminders, group split bills, subscription alarms, vector drawing canvas, and a private PIN & fingerprint Vault.",
      image: notespackShowcase,
      gallery: [
        {
          src: notespackShowcase,
          label: "NotesPack Logo",
          alt: "NotesPack Logo",
          caption: "NotesPack Logo · v3.0.0",
          verifyUrl: "https://play.google.com/store/apps/details?id=com.healme.notespack&pcampaignid=web_share",
          linkLabel: "Google Play",
        },
      ],
      tags: ["Kotlin", "Jetpack Compose", "OCR Camera", "Room DB", "Play Billing"]
    },
    {
      title: "Android Developer Certification Path",
      company: "Dicoding Indonesia · Google Developers ATP",
      period: "2025 - 2026",
      details: "Completed Dicoding's four-stage Android Developer curriculum (440 study hours across Beginner, Fundamental, Intermediate, and Expert specializations), covering Room DB, WorkManager, Motion Layout, Firebase, TDD, Clean Architecture, Dependency Injection (Dagger & Koin), Coroutine Flow, and Modularization.",
      image: dicodingExpert,
      gallery: [
        {
          src: dicodingExpert,
          label: "Expert",
          alt: "Menjadi Android Developer Expert certificate issued to Hilmi (RVZK0D4NNZD5)",
          caption: "Menjadi Android Developer Expert · ID RVZK0D4NNZD5 · Jul 2026 (90 hrs)",
          verifyUrl: "https://dicoding.com/certificates/RVZK0D4NNZD5",
        },
        {
          src: dicodingIntermediate,
          label: "Intermediate",
          alt: "Belajar Pengembangan Aplikasi Android Intermediate certificate issued to Hilmi (0LZ0YW1L3X65)",
          caption: "Belajar Pengembangan Aplikasi Android Intermediate · ID 0LZ0YW1L3X65 · Jul 2026 (150 hrs)",
          verifyUrl: "https://dicoding.com/certificates/0LZ0YW1L3X65",
        },
        {
          src: dicodingFundamental,
          label: "Fundamental",
          alt: "Belajar Fundamental Aplikasi Android certificate issued to Hilmi (4EXG1W5LDPRL)",
          caption: "Belajar Fundamental Aplikasi Android · ID 4EXG1W5LDPRL · May 2026 (140 hrs)",
          verifyUrl: "https://dicoding.com/certificates/4EXG1W5LDPRL",
        },
        {
          src: dicodingBeginner,
          label: "Beginner",
          alt: "Belajar Membuat Aplikasi Android untuk Pemula certificate issued to Hilmi (EYX4KW565PDL)",
          caption: "Belajar Membuat Aplikasi Android untuk Pemula · ID EYX4KW565PDL · Jan 2026 (60 hrs)",
          verifyUrl: "https://dicoding.com/certificates/EYX4KW565PDL",
        },
      ],
      tags: ["Android", "Clean Architecture", "Dagger & Koin", "Coroutine Flow", "TDD"]
    },
    {
      title: "University Graduation",
      company: "Brawijaya University",
      period: "2025",
      details: "Completed undergraduate studies and graduated from Brawijaya University, receiving the graduation folder on stage alongside the Campus President during the 2025 commencement ceremony.",
      image: gradRector,
      tags: ["Graduation", "Brawijaya University", "Milestone"]
    },
    {
      title: "Cloud Computing Cohort",
      company: "Bangkit Academy",
      period: "2024",
      details: "Bangkit Academy is a program that aims to develop the next generation of highly skilled tech professionals in Indonesia. Developed 'LeafCheck' AI-based leaf health detection application.",
      image: bangkitAcademycohort,
      tags: ["GCP", "Cloud Computing", "AI"]
    },
    {
        title: "Teacher (Researcher)",
        company: "SMKN 3 Batu",
        period: "2024",
        details: "Taught 2 classes of Vocational High School students in Computer Network and Telecommunication Engineering focusing on Skripsi research.",
        image: svvrsmkn3batu,
        tags: ["Research", "VR Education"]
    },
    {
      title: "Head Coordinator Multimedia",
      company: "Pusat Tahfidz Al-Qur'an UB",
      period: "2024",
      details: "Manage the Documentation of the event, handle multimedia needed in the event, and make a video for the event.",
      image: coddmtahfidzgrad,
      tags: ["Multimedia", "Leadership"]
    },
    {
      title: "Practicum Assistant",
      company: "Computer Science Faculty, Brawijaya University",
      period: "2023 - 2024",
      details: "Assist lecturer to teach more than 30 students in the practicum process, help students understand the material, and help students solve problems in the practicum process.",
      image: practicumAssistantfilkom,
      tags: ["Teaching", "Algorithms", "Game Dev"]
    },
    {
        title: "Teacher (Internship)",
        company: "SMKN 2 Malang",
        period: "2023",
        details: "Teach 3 classes of Vocacional High School Student in the field of Computer Network and Telecommunication Engineering for 1 semester.",
        image: plpsmkn2malang,
        tags: ["Education", "Networking"]
    },
    {
      title: "IT Development Staff",
      company: "Digital Creative MRP UB",
      period: "2023",
      details: "Help the IT Development team in the process of making a website for the mosque. we use laravel as the framework.",
      image: itdevdc,
      tags: ["Web Dev", "Laravel"]
    },
    {
      title: "Education Department Secretary",
      company: "Pusat Tahfidz Al-Qur'an UB",
      period: "2023",
      details: "Help the Head of Education Department in the process of making all the event run smoothly.",
      image: sekrependptq,
      tags: ["Administration", "Education"]
    },
    {
      title: "Multimedia Co-Coordinator",
      company: "Tahfidz Camp UB",
      period: "2023",
      details: "Help the Multimedia team in the process of making all necessary media for the event.",
      image: tahfidzcampwaco,
      tags: ["Media Production"]
    },
    {
      title: "Multimedia Staff",
      company: "KBM Departemen Sistem Informasi UB",
      period: "2022 - 2023",
      details: "Design, take photo, and handle Multimedia for various department events.",
      image: kbmptiddmcert,
      tags: ["Design", "Documentation"]
    },
];
