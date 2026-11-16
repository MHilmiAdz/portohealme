import dicodingExpert from "../assets/images/dicoding-android-expert.webp";
import dicodingIntermediate from "../assets/images/dicoding-android-intermediate.webp";
import dicodingFundamental from "../assets/images/dicoding-android-fundamental.webp";
import dicodingBeginner from "../assets/images/dicoding-android-beginner.webp";
import sertjavabasic from "../assets/images/javabasic.webp";
import sertprobsolvbasic from "../assets/images/problemsolving.webp";
import sertbecomeagooglecloudengineer from "../assets/images/becomeagce.webp";

export const certificates = [
  {
    title: "Menjadi Android Developer Expert",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "RVZK0D4NNZD5",
    verifyUrl: "https://dicoding.com/certificates/RVZK0D4NNZD5",
    description: "90-hour Google Developers Authorized industry-grade Android engineering capstone.",
    details: "Awarded July 27, 2026 (valid through July 27, 2029). Covers Clean Architecture, Reactive Programming with RxJava & Kotlin Coroutine Flow, Dependency Injection using Dagger and Koin, Modularization with Dynamic Feature modules, Continuous Integration, Performance, Security, Crashlytics, Timber, and MapBox.",
    image: dicodingExpert,
    tags: ["Clean Architecture", "Dagger & Koin", "Coroutine Flow", "Modularization"],
    featured: true,
  },
  {
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "0LZ0YW1L3X65",
    verifyUrl: "https://dicoding.com/certificates/0LZ0YW1L3X65",
    description: "150-hour advanced Android UI, Maps/Geofencing, Firebase, Media, and TDD.",
    details: "Awarded July 18, 2026 (valid through July 18, 2029). Covers Custom Views, Widgets, WebView, Motion Layout animations, Localization & Accessibility, Background Services, Media Multipart uploads, Google Maps API & Geofences, Unit/UI testing with MockWebServer & Idling Resource, Firebase Auth/RTDB/FCM, and a Paging Story App capstone.",
    image: dicodingIntermediate,
    tags: ["Motion Layout", "Maps & Geofence", "Firebase", "TDD & Paging"],
  },
  {
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "4EXG1W5LDPRL",
    verifyUrl: "https://dicoding.com/certificates/4EXG1W5LDPRL",
    description: "140-hour Android architecture, networking, Room DB, and background scheduling.",
    details: "Awarded May 26, 2026 (valid through May 26, 2029). Covers Fragments, Navigation Component, Bottom Navigation, ViewPager2, Asynchronous Web APIs, ViewModel & LiveData, Room Database, DataStore, Unit/Instrumentation Testing, WorkManager, and AlarmManager.",
    image: dicodingFundamental,
    tags: ["Room DB", "ViewModel & API", "WorkManager", "Navigation"],
  },
  {
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "EYX4KW565PDL",
    verifyUrl: "https://dicoding.com/certificates/EYX4KW565PDL",
    description: "60-hour foundational Android UI, lifecycle state, intents, and RecyclerView.",
    details: "Awarded January 26, 2026 (valid through January 26, 2029). Covers Android Studio workflows, Activity lifecycle & savedInstanceState handling, Explicit & Implicit Intents, ConstraintLayout/ViewGroup UI systems, Styles & Themes, and dynamic RecyclerView lists with Glide.",
    image: dicodingBeginner,
    tags: ["Android Studio", "Lifecycle", "ConstraintLayout", "RecyclerView"],
  },
  {
    title: "Become a Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    year: "2024",
    description: "Google Cloud infrastructure, compute, networking, and deployment workflows.",
    details: "Completed the Google Cloud Engineer specialization on Dicoding, covering Compute Engine, Cloud Run, IAM security, Cloud Storage, VPC networking, and cloud-native operational best practices.",
    image: sertbecomeagooglecloudengineer,
    tags: ["Cloud", "GCP", "Infra"],
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    year: "2022",
    credentialId: "6ADE1A46C0B5",
    description: "Verified algorithmic problem-solving certification solved in Java.",
    details: "Earned October 1, 2022 after completing the HackerRank Problem Solving (Basic) skill assessment within the 90-minute timed window using Java data structures and algorithms.",
    image: sertprobsolvbasic,
    tags: ["Java", "Algorithms", "Data Structures"],
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    year: "2022",
    description: "Verified Java OOP, classes, collections, and core language fundamentals.",
    details: "Earned by completing HackerRank's Java (Basic) skill assessment covering object-oriented design, inheritance, exception handling, and core standard-library APIs.",
    image: sertjavabasic,
    tags: ["Java", "OOP"],
  },
];
