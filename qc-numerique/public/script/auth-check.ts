import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZV7taFCNWJSq-vQdPFlp0fYkyBrzR_ks",
    authDomain: "webclone-581b7.firebaseapp.com",
    projectId: "webclone-581b7",
    storageBucket: "webclone-581b7.firebasestorage.app",
    messagingSenderId: "934204454708",
    appId: "1:934204454708:web:14aeb7f218ce5c8d4d9761"
};

// Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Logout button handling
const logoutBtn = document.getElementById("logout-btn") as HTMLButtonElement;

if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
        try {
            await signOut(auth); // Sign out user
            alert("Déconnexion réussie!");
            window.location.href = "/login"; // Redirect to login page
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Erreur lors de la déconnexion. Essayez à nouveau.");
        }
    });
}
