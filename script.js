import { auth } from "./firebase.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// REGISTER
window.register = function() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Berhasil daftar! Silakan login.");
        window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// LOGIN
window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.location.href = "home.html";
    })
    .catch(err => alert(err.message));
}

// LOGOUT
window.logout = function() {
    signOut(auth);
}

// CEK LOGIN
onAuthStateChanged(auth, (user) => {
    if (window.location.pathname.includes("home.html")) {
        if (!user) {
            window.location.href = "index.html";
        }
    }
});
