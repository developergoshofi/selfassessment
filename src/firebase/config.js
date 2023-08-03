// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBhynks2ovdpE4w4uiL7iWHqOuDQHGlCAo",
    authDomain: "selfassessment-fc253.firebaseapp.com",
    projectId: "selfassessment-fc253",
    storageBucket: "selfassessment-fc253.appspot.com",
    messagingSenderId: "888139201427",
    appId: "1:888139201427:web:3337ec1c300086d7d00666"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

// Export storage object
export { storage };
export const provider = new GoogleAuthProvider(); // Cambia esta línea