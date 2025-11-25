// Firebase SDK CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Config Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyAXXREJ4yoED2JdjFpaNUq_UxfLDfg4LLU",
  authDomain: "tts-web-project.firebaseapp.com",
  projectId: "tts-web-project",
  storageBucket: "tts-web-project.firebasestorage.app",
  messagingSenderId: "134137537366",
  appId: "1:134137537366:web:bdc439c143ab040f4aecf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
