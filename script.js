// Firebase Config (punya kamu)
const firebaseConfig = {
  apiKey: "AIzaSyAXXREJ4yoED2JdjFpaNUq_UxfLDfg4LLU",
  authDomain: "tts-web-project.firebaseapp.com",
  projectId: "tts-web-project",
  storageBucket: "tts-web-project.firebasestorage.app",
  messagingSenderId: "134137537366",
  appId: "1:134137537366:web:bdc439c143ab040f4aecf7"
};

// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// LOGIN
window.login = function () {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
            window.location.href = "home.html";
        })
        .catch(err => alert(err.message));
}

// REGISTER
window.register = function () {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(err => alert(err.message));
}

// LOGOUT
window.logout = function () {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
}

// CEK STATUS LOGIN DI HOME.HTML
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
