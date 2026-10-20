# Privacy Policy for NotesPack

**Application:** NotesPack (`com.healme.notespack`)  
**Data Controller:** ProjectsHealme, East Java, Indonesia  
**Contact Email:** [projectshealme@gmail.com](mailto:projectshealme@gmail.com)  
**Effective Date:** October 20, 2026  
**Last Updated:** October 20, 2026  

Welcome to **NotesPack** ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy details what information NotesPack collects, how that data is processed and secured, the legal grounds for processing, your statutory rights under applicable privacy legislation, and how you may contact us or delete your account.

---

## 1. Data Controller Information
The data controller responsible for the personal data processed in connection with NotesPack is:
- **Controller Name:** ProjectsHealme
- **Mailing Address:** East Java, Indonesia
- **Inquiry & DPO Contact:** [projectshealme@gmail.com](mailto:projectshealme@gmail.com)

---

## 2. Information We Collect

### A. Account & Authentication Data
Google Sign-In is required to initialize the application. When you sign in using **Google Sign-In** (powered by Firebase Authentication and Android Credential Manager), we receive and store:
- Your full name (as provided by your Google profile)
- Your email address
- Your profile picture URL
- A unique Firebase User Identifier (UID)

This authentication information is used strictly to establish and verify your session identity. All note content, drawings, receipts, and user data remain stored locally on your device.

### B. User Notes & Financial Content (Stored Locally)
Any notes, spending entries, split bills, checklists, drawings, itineraries, recipes, item/due-date reminders, and subscription schedules you create within NotesPack are stored **locally on your device** in an on-device SQLite database (Room).

Locally captured or attached media—such as physical receipt scans and recipe dish photos (stored in local application storage under `dish_photos/`)—remain strictly on your device. They are never uploaded to remote servers or shared with third parties. When you perform an export, these images are packaged directly inside your user-initiated, encrypted `.notespack` archive.

NotesPack features a secure **Vault**. Notes stored inside the Vault, as well as sensitive due-date verification PINs, are encrypted at the field level on-device using hardware-backed **AES-256-GCM encryption** via the Android KeyStore. We do not have access to your private encryption keys or unencrypted vault content.

### C. Device Permissions
- **Camera:** Used exclusively when you choose to capture physical receipts for optical character recognition (OCR), capture recipe or dish photos, or scan offline QR codes for due date reminders. Images are processed and stored locally on your device.
- **Notifications:** Used to dispatch timely reminder alerts for item/due-date reminders and recurring subscription renewals scheduled by you.
- **Exact Alarms (`SCHEDULE_EXACT_ALARM`):** Used via Android's AlarmManager to guarantee that due date alerts and subscription billing reminders fire precisely at the user-scheduled minute.
- **Biometrics:** Used to unlock the on-device Vault. Biometric authentication is handled entirely by Android's `BiometricPrompt` framework; NotesPack never receives, processes, or stores raw biometric or fingerprint data.

---

## 3. Network Connections & Third-Party Services
While NotesPack operates primarily on-device, internet access is utilized for specific explicit functionalities:
- **Google Sign-In & Firebase Authentication:** Communicates with Google identity and Firebase servers to authenticate your Google profile.
- **Link Previews:** Retrieves Open Graph metadata and favicons directly via HTTPS when you save web links.
- **Google Play In-App Review:** Utilizes the official Google Play In-App Review API.
- **Google Play Services & ML Kit:** On-device text recognition, Document Scanning, and Barcode Scanning utilize ML Kit models provided by Google Play services.

---

## 4. Legal Basis for Processing
Under GDPR and UK GDPR:
- **Performance of a Contract (Art. 6(1)(b)):** Processing authentication data to maintain your account and deliver app features.
- **Legitimate Interests (Art. 6(1)(f)):** Generating link previews, securing the app, and debugging crash reports.
- **Consent (Art. 6(1)(a)):** Where requested for optional runtime permissions (Camera, Notifications).

---

## 5. International Data Transfers
Firebase Authentication and Google Play services are hosted by Google LLC on servers located in the United States and globally, governed by European Commission Standard Contractual Clauses (SCCs).

---

## 6. Data Retention & Account Deletion
Authentication credentials remain stored with Firebase Authentication for as long as your account remains active. Local note databases and media files remain on your device until deleted by you or until the app is uninstalled.

You can delete your account at any time through:
1. **In-App Deletion:** Open NotesPack, navigate to *Profile → Settings & Backup → Danger Zone → Delete Account*.
2. **Email Request:** Email [projectshealme@gmail.com](mailto:projectshealme@gmail.com) from the email address associated with your NotesPack account. Requests are processed within 30 days.

---

## 7. Backup Files (`.notespack`)
NotesPack allows you to export your data into a portable archive (`.notespack`). You may optionally protect this backup with a custom password, which encrypts the entire archive using **PBKDF2WithHmacSHA256** (210,000 iterations) and **AES-256-GCM**.

---

## 8. Your Statutory Privacy Rights
Depending on your jurisdiction (including GDPR, UK GDPR, UU PDP No. 27/2022, and LGPD), you have rights to access, rectify, erase, restrict, object, or export your personal data. Contact us at [projectshealme@gmail.com](mailto:projectshealme@gmail.com).

---

## 9. CalOPPA Do Not Track Statement
NotesPack does not track users over time and across third-party websites to provide targeted advertising, and therefore does not alter its behavior in response to web browser Do Not Track (DNT) signals.

---

## 10. Children's Privacy
NotesPack is not directed to children under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect personal identifiable information from children.

---

## 11. Changes to this Privacy Policy
We may update this Privacy Policy from time to time. Any material changes will be reflected with an updated "Last Updated" date.
