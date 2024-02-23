// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
projectId: "mern-estate-a9e75",
authDomain: "mern-estate-a9e75.firebaseapp.com",
storageBucket: "mern-estate-a9e75.appspot.com",
messagingSenderId: "354077010609",
appId: "1:354077010609:web:deb8df22ccfbbc2a7a1090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;