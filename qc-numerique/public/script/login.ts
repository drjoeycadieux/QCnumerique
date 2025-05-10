// login.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDZV7taFCNWJSq-vQdPFlp0fYkyBrzR_ks",
    authDomain: "webclone-581b7.firebaseapp.com",
    projectId: "webclone-581b7",
    storageBucket: "webclone-581b7.firebasestorage.app",
    messagingSenderId: "934204454708",
    appId: "1:934204454708:web:14aeb7f218ce5c8d4d9761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login-form") as HTMLFormElement;

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        // Redirect or proceed to app
        window.location.href = "/dashboard";
    } catch (error) {
        alert("Login failed: " + (error as Error).message);
    }
});
