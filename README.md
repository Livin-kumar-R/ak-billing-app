# AK Agency — FMCG Distribution & Billing Management System
## Phase 1: Project Setup Guide

---

## 📁 Folder Structure

```
ak-agency/
│
├── index.html                      ← Login page (entry point)
│
├── firebase/
│   └── firebase-config.js          ← Firebase init + service exports
│
├── modules/
│   ├── auth/
│   │   └── auth.js                 ← Login, logout, auth guard
│   ├── dashboard/                  ← (Phase 2)
│   ├── products/                   ← (Phase 3)
│   ├── retailers/                  ← (Phase 4)
│   ├── billing/                    ← (Phase 5)
│   ├── stock/                      ← (Phase 6)
│   ├── credits/                    ← (Phase 7)
│   └── reports/                    ← (Phase 8)
│
├── pages/
│   ├── dashboard.html              ← (Phase 2)
│   ├── products.html               ← (Phase 3)
│   ├── retailers.html              ← (Phase 4)
│   ├── billing.html                ← (Phase 5)
│   ├── stock.html                  ← (Phase 6)
│   ├── credits.html                ← (Phase 7)
│   └── reports.html                ← (Phase 8)
│
├── components/
│   ├── sidebar.js                  ← Shared sidebar nav (Phase 2)
│   └── topbar.js                   ← Shared top bar (Phase 2)
│
└── assets/
    ├── css/                        ← Custom CSS if needed
    ├── js/                         ← Utility helpers
    └── images/                     ← Logo, icons
```

---

## 🔥 STEP-BY-STEP FIREBASE SETUP

### Step 1 — Create a Firebase Project

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"**
3. Project name: `ak-agency` (or any name you prefer)
4. Disable Google Analytics (optional for internal tools)
5. Click **"Create project"**

---

### Step 2 — Enable Firebase Authentication

1. In your Firebase project, go to **Build → Authentication**
2. Click **"Get started"**
3. Under **Sign-in method**, click **Email/Password**
4. Toggle **Enable** → Click **Save**

---

### Step 3 — Create Admin User

1. Still in Authentication, click **"Users"** tab
2. Click **"Add user"**
3. Enter:
   - Email: `admin@akagency.in` (or any email you want)
   - Password: Create a strong password
4. Click **"Add user"**

> ⚠️ Save these credentials securely — this is your admin login.

---

### Step 4 — Set Up Firestore Database

1. Go to **Build → Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (we'll add security rules later)
4. Select your nearest region:
   - For India: choose `asia-south1 (Mumbai)`
5. Click **"Enable"**

---

### Step 5 — Register Web App & Get Config

1. In Firebase Console, click the **gear icon ⚙️** → **Project settings**
2. Scroll to **"Your apps"** section
3. Click the **Web icon `</>`**
4. App nickname: `AK Agency Web`
5. Click **"Register app"**
6. Copy the `firebaseConfig` object — it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "ak-agency-xxxxx.firebaseapp.com",
  projectId: "ak-agency-xxxxx",
  storageBucket: "ak-agency-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

### Step 6 — Paste Config into Your Project

Open `firebase/firebase-config.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "PASTE_YOUR_apiKey_HERE",
  authDomain: "PASTE_YOUR_authDomain_HERE",
  projectId: "PASTE_YOUR_projectId_HERE",
  storageBucket: "PASTE_YOUR_storageBucket_HERE",
  messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
  appId: "PASTE_YOUR_appId_HERE"
};
```

---

### Step 7 — Add Firestore Security Rules (Recommended)

In Firestore → **Rules** tab, replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Click **Publish**.

---

### Step 8 — Run the Project Locally

Since the project uses ES Modules (`type="module"`), you need a local server.

**Option A — VS Code Live Server (easiest)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → **"Open with Live Server"**

**Option B — Python (if installed)**
```bash
cd ak-agency
python -m http.server 3000
# Open http://localhost:3000
```

**Option C — Node.js**
```bash
npx serve ak-agency
```

> ⚠️ Do NOT open `index.html` directly as a file (`file://`) — Firebase Auth won't work without a server.

---

## ✅ Phase 1 Checklist

- [x] Project folder structure created
- [x] Firebase config file ready
- [x] Auth module (login/logout/guard) ready
- [x] Login page (index.html) complete
- [ ] Replace firebaseConfig values with yours
- [ ] Create admin user in Firebase Console
- [ ] Test login

---

## 🗺️ Build Roadmap

| Phase | Module           | Status      |
|-------|-----------------|-------------|
| 1     | Login System     | ✅ Complete  |
| 2     | Dashboard        | 🔜 Next      |
| 3     | Product Mgmt     | Upcoming    |
| 4     | Retailer Mgmt    | Upcoming    |
| 5     | Billing System   | Upcoming    |
| 6     | Stock Management | Upcoming    |
| 7     | Credit Mgmt      | Upcoming    |
| 8     | Sales Reports    | Upcoming    |
