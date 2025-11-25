// ----------------------------
// GANTI CONFIG DENGAN PUNYA KAMU
// ----------------------------
const firebaseConfig = {
  apiKey: "ISI_DI_SINI",
  authDomain: "ISI_DI_SINI",
  projectId: "ISI_DI_SINI",
  storageBucket: "ISI_DI_SINI",
  messagingSenderId: "ISI_DI_SINI",
  appId: "ISI_DI_SINI"
};

// -----------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,
         createUserWithEmailAndPassword,
         signOut, onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// LOGIN
window.login = function() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(err => alert(err.message));
}

// REGISTER
window.register = function() {
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// LOGOUT
window.logout = function() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}

// CEK USER LOGIN (untuk home.html)
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("home.html")) {
    if (user) {
      document.getElementById("userEmail").innerText =
        "Login sebagai: " + user.email;
    } else {
      window.location.href = "index.html";
    }
  }
});
