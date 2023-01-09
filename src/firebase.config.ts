// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXd9yNwLvXvWQ3iWOeIPCEWVhaYRVF3SE",
    authDomain: "wtfuck-d0de5.firebaseapp.com",
    databaseURL: "https://wtfuck-d0de5-default-rtdb.firebaseio.com",
    projectId: "wtfuck-d0de5",
    storageBucket: "wtfuck-d0de5.appspot.com",
    messagingSenderId: "314438364070",
    appId: "1:314438364070:web:e9cc9d978a84a5446abd67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, auth, storage, analytics };
