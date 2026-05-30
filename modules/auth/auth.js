// ============================================================
// FILE: modules/auth/auth.js
// PURPOSE: Handles login, logout, and auth state changes.
//          Guards all protected pages by checking session.
// ============================================================

import { auth } from "../../firebase/firebase-config.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── LOGIN ────────────────────────────────────────────────────
export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// ── LOGOUT ───────────────────────────────────────────────────
export async function logoutUser() {
  await signOut(auth);
  window.location.href = "/index.html";
}

// ── AUTH GUARD (call on every protected page) ────────────────
// Usage: import { requireAuth } from "../modules/auth/auth.js";
//        requireAuth();  ← put at top of any protected page script
export function requireAuth(redirectTo = "/index.html") {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        window.location.href = redirectTo;
        reject(new Error("Not authenticated"));
      }
    });
  });
}

// ── CURRENT USER ─────────────────────────────────────────────
export function getCurrentUser() {
  return auth.currentUser;
}
