// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
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

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
