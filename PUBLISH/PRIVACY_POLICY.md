# Privacy Policy for NotesPack

**Application:** NotesPack (`com.healme.notespack`)  
**Effective Date:** August 26, 2026  
**Last Updated:** August 26, 2026  

Welcome to **NotesPack** ("we", "our", or "us"). We respect your privacy and are committed to protecting any personal data and information you share with us. This Privacy Policy explains how our application collects, uses, stores, and protects your information when you use our mobile application.

---

## 1. Information We Collect

### A. Personal Account Information (Authentication)
When you sign in using **Google Sign-In** (powered by Firebase Authentication), we may collect:
- Your name
- Your email address
- Your profile picture URL
- A unique Firebase user identification string (UID)

This information is used strictly to identify your account, secure your session, and personalize your experience.

### B. User Notes and Content
Any notes, checklists, text entries, and attachments you create within NotesPack are stored **locally on your device** using an on-device SQLite database (Android Room). We do not sell, rent, or view your private note contents.

### C. Device Permissions
- **Camera (`android.permission.CAMERA`):** Used only when you choose to capture images or scan text documents within the app for optical character recognition. Images captured for text scanning are processed on-device.
- **Internet (`android.permission.INTERNET`):** Required to authenticate your account via Firebase and download necessary dynamic resources.

---

## 2. On-Device Text Recognition (OCR)
NotesPack integrates **Google ML Kit Text Recognition** to allow you to extract text from images. The text extraction is performed entirely on-device. Your scanned images and extracted text are not sent to any external server for processing.

---

## 3. Third-Party Services
NotesPack uses trusted third-party services that may collect information used to identify you or manage authentication. Below are links to the privacy policies of the third-party service providers used by the app:
- [Google Play Services](https://policies.google.com/privacy)
- [Firebase Authentication](https://firebase.google.com/support/privacy)
- [Google ML Kit](https://developers.google.com/ml-kit/terms)

---

## 4. Data Storage and Security
- **Encryption in Transit:** All communications with Firebase authentication servers are encrypted using modern Transport Layer Security (HTTPS/TLS).
- **Local Sandboxing:** Your local database and cached files are stored in your device's protected application sandbox, inaccessible to other standard applications.

---

## 5. Data Retention and Account Deletion
We retain authentication records only for as long as your account remains active.

- **Web Deletion Request:** You can request immediate deletion of your authentication credentials and associated data by emailing us at [projectshealme@gmail.com](mailto:projectshealme@gmail.com?subject=NotesPack%20Data%20Deletion). Requests are processed within 30 days.
- **Local Data Deletion:** Uninstalling the app or clearing the app storage from Android Settings immediately and permanently deletes all local notes and preferences stored on your device.

---

## 6. Children's Privacy
NotesPack is not directed to individuals under the age of 13. We do not knowingly collect personally identifiable information from children under 13.

---

## 7. Changes to This Privacy Policy
We may update our Privacy Policy periodically. Any updates will be posted on this page with a revised "Last Updated" date.

---

## 8. Contact Us
For any questions regarding this Privacy Policy or your personal data:
- **Email:** [support@healme.app](mailto:support@healme.app)
- **Developer / Organization:** NotesPack Team
