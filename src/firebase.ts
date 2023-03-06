// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyyh-LbBsVMetTXMcqgOLxuVWBbOxFEZE",
  authDomain: "meetme-db781.firebaseapp.com",
  projectId: "meetme-db781",
  storageBucket: "meetme-db781.appspot.com",
  messagingSenderId: "239827651216",
  appId: "1:239827651216:web:3c7c742ce754997f02e615",
  measurementId: "G-CT7XLNFS0R",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

export const auth = getAuth(app)
export default app
