# Terms of Service — NotesPack

- **Application:** NotesPack: Notes & Multitool (`com.healme.notespack`)
- **Developer / Operator:** ProjectsHealme, East Java, Indonesia
- **Contact Email:** projectshealme@gmail.com
- **Effective Date:** November 5, 2026
- **Last Updated:** November 12, 2026

Welcome to **NotesPack** ("Application", "Service"), operated by **ProjectsHealme** ("we", "us", or "our"). Please read these Terms of Service ("Terms") carefully before downloading, installing, or using the NotesPack mobile application.

---

## 1. Acceptance of Terms
By downloading, accessing, or using NotesPack, you agree to be bound by these Terms and our [Privacy Policy](https://mhilmiadz.github.io/portohealme/notespack/privacy-policy/). If you do not agree to these Terms, please do not use the Application. You must be at least 13 years of age (or at least 16 years of age in the European Economic Area) to use NotesPack.

---

## 2. Account, Authentication & Single-Device Sessions
NotesPack uses **Google Sign-In** (powered by Firebase Authentication and Android Credential Manager) to establish your session identity. You are responsible for maintaining the security of your Google account and your physical device.
- **Single-Device Session Policy:** To protect account entitlements, NotesPack enforces one active signed-in session per Google account using a hashed device installation identifier. Signing in on a new device automatically signs out your previous device. Because your notes are stored locally on each device rather than synced via our cloud servers, please export a `.notespack` backup before switching devices.
- **Account Deletion:** You may delete your authentication profile at any time directly inside the app under **Profile → Settings & Backup → Danger Zone → Delete Account** or by emailing `projectshealme@gmail.com`.

---

## 3. Local-First Data Storage, Encrypted Vault & Backups
NotesPack is architected as a **100% local-first** application:
- **On-Device Storage:** All notes, voice dictation transcripts, spending logs, split bills, checklists, drawings, travel itineraries, recipes, link collections, due-date items, subscription trackers, and attached photos are stored locally on your device in an internal SQLite database and app storage. We do not store copies of your notes on remote cloud servers.
- **PIN/Biometric Vault & Password-Protected Backups:** Notes locked in the Vault are encrypted on-device using hardware-backed **AES-256-GCM** encryption. Exported `.notespack` backup archives are saved to your public `Downloads/NotesPack/` folder (and imported via Android's Storage Access Framework). Archives protected with a password are encrypted using **PBKDF2WithHmacSHA256** and **AES-256-GCM**; **exports created without a password are unencrypted** in public Downloads storage.
- **No Remote Recovery:** Because we never transmit or store your notes, Vault PINs, or backup passwords on our servers, **we cannot recover your data or reset your backup password** if your device is lost, damaged, factory-reset, uninstalled without creating a `.notespack` backup, or if you forget your custom backup password. Maintaining regular local backups is solely your responsibility.

---

## 4. NotesPack Pro, Subscriptions & Google Play Billing
NotesPack offers an optional paid upgrade (**NotesPack Pro**) available as an auto-renewing monthly subscription (with eligible introductory welcome discount offers or promotional `Redeem Code` vouchers), processed exclusively through **Google Play Billing**.
- **Billing & Automatic Renewal:** Subscription plans automatically renew at the end of each billing cycle unless canceled at least 24 hours prior to the end of the current period. Your Google Play account will be charged at the recurring rate displayed at checkout (or after any applicable introductory first-month offer). Active Play subscriptions are tied to the Google account used for purchase.
- **Easy Cancellation:** You may manage or cancel your subscription at any time directly through the Google Play Store app (**Profile → Payments & subscriptions → Subscriptions**) or online at `https://play.google.com/store/account/subscriptions`. Uninstalling the app or deleting your NotesPack login does not automatically cancel an active Google Play subscription.
- **Refunds & Withdrawal Rights:** All billing disputes and refund requests are governed by the Google Play Terms of Service and Google Play's refund policies. If you reside in the European Economic Area (EEA) or United Kingdom, by purchasing digital content that is made available immediately, you consent to immediate performance and acknowledge that you waive your statutory 14-day right of withdrawal once digital access begins, except as otherwise provided by Google Play policy.

---

## 5. Disclaimers for OCR, Voice Dictation, Travel Tools & Reminders

### A. Receipt OCR, Voice Dictation, Travel Maps & Currency Estimates ("Not 100% Accurate")
NotesPack includes optical character recognition (OCR) powered by on-device machine learning (Google ML Kit), speech-to-text voice dictation, automated itemized bill splitting, tax/service distribution, offline currency estimation, and external map deep-links. **Disclaimer: OCR scanning, speech transcription, currency estimates, and automated calculations are not 100% accurate.** Accuracy depends on receipt print quality, lighting, ambient noise, pronunciation, offline speech packs, and external map data. Always verify extracted figures, dictations, and travel details before settling payments or making decisions. NotesPack is a personal organization tool and does not provide accounting, tax, or financial advice.

### B. Due-Date Alarms & Subscription Reminders
NotesPack schedules local notifications and exact alarms (including D-7 and D-1 subscription renewal reminders) using the Android operating system's `AlarmManager`. Delivery of notifications depends on your device remaining powered on, notification permissions being granted, and your device manufacturer's battery optimization settings. We are not liable for missed renewals, late fees, or missed deadlines resulting from suppressed or delayed device notifications.

---

## 6. User Content & Acceptable Use
You retain 100% ownership and intellectual property rights over all content you create or import into NotesPack. You agree not to:
- Use the Application in violation of any applicable local, national, or international law or regulation.
- Attempt to reverse-engineer, decompile, modify, bypass billing checks, or tamper with the Application's compiled binaries or security mechanisms.
- Abuse network features (such as Link Collection Open Graph metadata previews) to probe, scrape, or attack third-party servers.

---

## 7. Intellectual Property
The NotesPack name, logo, user interface design, custom illustrations, and underlying source code are the exclusive intellectual property of **ProjectsHealme** and are protected by copyright and trademark laws.

---

## 8. Disclaimer of Warranties & Limitation of Liability
NotesPack is provided on an **"AS IS"** and **"AS AVAILABLE"** basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, ProjectsHealme shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, financial discrepancies from split bills or OCR scans, missed subscription cancellations, or device malfunctions arising out of your use of the Application.

---

## 9. Governing Law & Changes to Terms
These Terms are governed by the laws of the Republic of Indonesia, without prejudice to mandatory consumer protection laws applicable in your country of residence. We may update these Terms from time to time to reflect new features or legal requirements by updating the "Last Updated" date at the top of this page.

---

## 10. Contact Us
If you have any questions or concerns regarding these Terms of Service, please contact us at:
- **Developer:** ProjectsHealme
- **Location:** East Java, Indonesia
- **Email:** `projectshealme@gmail.com`
