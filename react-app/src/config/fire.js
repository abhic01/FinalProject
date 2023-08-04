// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHdBe33bKxCiJo4qQHqeXFfvuFqIRmN_E",
    authDomain: "db-demo-b090f.firebaseapp.com",
    projectId: "db-demo-b090f",
    storageBucket: "db-demo-b090f.appspot.com",
    messagingSenderId: "347145516125",
    appId: "1:347145516125:web:9ee21c2772ea8d925189b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;