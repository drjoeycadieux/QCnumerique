import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase config
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

// Email/Password registration form
const emailRegisterForm = document.getElementById('email-register-form') as HTMLFormElement;

emailRegisterForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Compte créé avec succès!");
        window.location.href = "/dashboard";
    } catch (error) {
        alert(`Erreur: ${(error as Error).message}`);
    }
});

// Google Sign-In Button
const googleProvider = new GoogleAuthProvider();
const googleSignInBtn = document.getElementById('google-sign-in-btn') as HTMLElement;

googleSignInBtn.addEventListener('click', async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        alert("Connexion réussie avec Google!");
        window.location.href = "/dashboard";
    } catch (error) {
        alert(`Erreur Google: ${(error as Error).message}`);
    }
});
