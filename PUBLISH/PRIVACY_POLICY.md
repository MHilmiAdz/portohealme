# Privacy Policy for NotesPack

**Application:** NotesPack: Notes & Multitool (`com.healme.notespack`)  
**Data Controller:** ProjectsHealme, East Java, Indonesia  
**Contact Email:** [projectshealme@gmail.com](mailto:projectshealme@gmail.com)  
**Effective Date:** October 20, 2026  
**Last Updated:** November 12, 2026  

Welcome to **NotesPack** ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy details what information NotesPack collects, how that data is processed and secured, the legal grounds for processing, your statutory rights under applicable privacy legislation, and how you may contact us or delete your account.

---

## 1. Data Controller Information
The data controller responsible for the personal data processed in connection with NotesPack is:
- **Controller Name:** ProjectsHealme
- **Mailing Address:** East Java, Indonesia
- **Inquiry & DPO Contact:** [projectshealme@gmail.com](mailto:projectshealme@gmail.com)

---

## 2. Information We Collect

### A. Account, Authentication & Entitlement Data
Google Sign-In is required to initialize the application. When you sign in using **Google Sign-In** (powered by Firebase Authentication and Android Credential Manager), we receive and store:
- Your full name (as provided by your Google profile)
- Your email address
- Your profile picture URL
- A unique Firebase User Identifier (UID)
- **Session & Pro Entitlement Identifiers:** To enforce one active signed-in session per account and sync NotesPack Pro / introductory offer status across reinstalls, NotesPack generates a random app-scoped UUID (`installation_id`) stored locally and transmits a one-way SHA-256 hash alongside entitlement metadata flags (Pro status, VIP voucher flag, expiry timestamp, and welcome-offer usage state) within your Firebase Authentication profile metadata.
- **Google Play Billing Identifiers:** When you purchase an optional **NotesPack Pro** subscription through Google Play Billing, we receive purchase tokens, subscription entitlement state, and send one-way obfuscated identifiers (`obfuscatedAccountId` and `obfuscatedProfileId` derived from hashed account/installation IDs) to Google Play for billing attribution and fraud prevention. We never receive or store your credit card or banking details.

This authentication and entitlement information is used strictly to verify your session identity, enforce single-device session limits, and manage NotesPack Pro access. All note content, drawings, receipts, voice transcripts, and user entries remain stored locally on your device.

### B. User Notes & Financial Content (Stored Locally)
Any notes, checklists, voice dictation transcripts, travel itineraries, recipes, link collections, spending entries, split bills, canvas drawings, item/due-date reminders, and subscription schedules you create within NotesPack are stored **locally on your device** in an on-device SQLite database (Room).

Locally captured or attached media—including paper receipt scans (`receipts/`), freehand/vector sketches and image annotations (`drawings/`, `drawing_images/`), and recipe dish photos (`dish_photos/`)—remain strictly on your device in local app storage. They are never uploaded to our servers or sold to third parties. When you initiate a backup export, selected local data and media are packaged directly into a `.notespack` archive on your device (with optional password encryption).

NotesPack features a secure **Vault**. Notes stored inside the Vault, as well as sensitive due-date verification PINs, are encrypted at the field level on-device using hardware-backed **AES-256-GCM encryption** via the Android KeyStore. We do not have access to your private encryption keys or unencrypted vault content.

### C. Device Permissions
- **Camera:** Used exclusively when you choose to capture physical receipts for optical character recognition (OCR), capture recipe or dish photos, or scan offline QR codes for due date reminders. Images are processed and stored locally on your device.
- **Microphone (`RECORD_AUDIO`):** Used only when you actively initiate Voice Dictation in supported note editors to transcribe speech into text. On Android 12+ devices with on-device speech recognition available, audio is processed locally on your device. On older Android versions or devices lacking installed offline speech packs, Android's `SpeechRecognizer` service may process audio through your device's default system speech provider (such as Google Speech Services) under that provider's terms and privacy policy. NotesPack never transmits or retains audio recordings on our own servers.
- **Notifications:** Used to dispatch timely reminder alerts for item/due-date reminders and recurring subscription renewals scheduled by you.
- **Exact Alarms (`SCHEDULE_EXACT_ALARM`):** Used via Android's AlarmManager to guarantee that due date alerts and subscription billing reminders fire precisely at the user-scheduled minute.
- **Biometrics:** Used to unlock the on-device Vault. Biometric authentication is handled entirely by Android's `BiometricPrompt` framework; NotesPack never receives, processes, or stores raw biometric or fingerprint data.

---

## 3. Network Connections & Third-Party Services
While NotesPack operates primarily on-device, internet access is utilized for specific explicit functionalities:
- **Google Sign-In & Firebase Authentication:** Communicates with Google identity and Firebase servers to authenticate your Google profile and store session/entitlement state metadata.
- **Google Play Billing:** Handles optional NotesPack Pro subscriptions (`notespacksubscription`) and introductory offers via Google Play's payment infrastructure in accordance with Google's Privacy Policy.
- **Link Previews & Remote Thumbnails:** When you save a web link in a Link Collection note, NotesPack retrieves HTML `<head>` Open Graph metadata and loads remote preview images/favicons (via Coil) directly via HTTPS from the destination host.
- **System Speech Recognition Fallback:** Where hardware or OS version requires Android's standard `SpeechRecognizer` fallback, voice audio during active dictation may be routed to the system speech recognition provider.
- **Google Play In-App Review:** Utilizes the official Google Play In-App Review API.
- **Google Play Services & ML Kit:** On-device text recognition, Document Scanning, and Barcode Scanning utilize ML Kit models provided by Google Play services.
- **External App Intents:** Tapping "Open in Maps" on a travel itinerary or exporting split-bill/itinerary cards hands off user-initiated location queries or share text to external apps chosen by you (such as Google Maps, WhatsApp, or Telegram).

---

## 4. Legal Basis for Processing
Under GDPR, UK GDPR, and Indonesian Law No. 27 of 2022 on Personal Data Protection (UU PDP):
- **Performance of a Contract (Art. 6(1)(b) GDPR / UU PDP Art. 20(2)(b)):** Processing Google authentication data and Google Play Billing entitlements to maintain your account, deliver Pro features, and operate requested services.
- **Legitimate Interests (Art. 6(1)(f) GDPR):** Enforcing single-device active sessions, preventing welcome-offer/billing abuse, generating user-initiated link previews, and debugging crashes.
- **Consent (Art. 6(1)(a) GDPR / UU PDP Art. 20(2)(a)):** Where requested for optional runtime permissions (Camera, Microphone, Notifications).

---

## 5. International Data Transfers
Firebase Authentication and Google Play services are hosted by Google LLC on servers located in the United States and globally, governed by European Commission Standard Contractual Clauses (SCCs).

---

## 6. Data Retention & Account Deletion
Authentication credentials and associated profile metadata remain stored with Firebase Authentication for as long as your account remains active. Google Play retains billing records under Google's statutory tax and accounting schedules. Local note databases and media files remain on your device until deleted by you or until the app is uninstalled.

You can delete your account at any time through:
1. **In-App Deletion:** Open NotesPack, navigate to *Profile → Settings & Backup → Danger Zone → Delete Account*. Note: deleting your account does not cancel an active Google Play subscription; cancel separately in Google Play Store Subscriptions.
2. **Email Request:** Email [projectshealme@gmail.com](mailto:projectshealme@gmail.com) from the email address associated with your NotesPack account. Requests are processed within 30 days.

---

## 7. Backup Files (`.notespack`)
NotesPack allows you to export your data and local media into a portable archive (`.notespack`) saved on-device to your **public `Downloads/NotesPack/` directory**, and restored via the Android Storage Access Framework (SAF) file picker. You may optionally protect exported archives with a custom password, which encrypts the archive using **PBKDF2WithHmacSHA256** (210,000 iterations) and **AES-256-GCM**. **If you choose to export without setting a password, the resulting `.notespack` archive is unencrypted.**

---

## 8. Your Statutory Privacy Rights
Depending on your jurisdiction (including GDPR, UK GDPR, UU PDP No. 27/2022, California CalOPPA/CPRA, and LGPD), you have rights to access, rectify, erase, restrict, object, withdraw permission (notifications, microphone, camera), or export your personal data. Contact us at [projectshealme@gmail.com](mailto:projectshealme@gmail.com).

---

## 9. CalOPPA Do Not Track & No Sale Notice
NotesPack does not sell or share personal information for cross-context behavioral advertising, displays zero third-party ads, and does not track users over time across third-party websites; accordingly, it does not alter behavior in response to web browser Do Not Track (DNT) signals.

---

## 10. Children's Privacy
NotesPack is not directed to children under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect personal identifiable information from children.

---

## 11. Changes to this Privacy Policy
We may update this Privacy Policy from time to time. Any material changes will be reflected with an updated "Last Updated" date.
