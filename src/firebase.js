import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAvPMSnUoI0p-WV9B4gjK-KpU8xViijcXY",
  authDomain: "facebook-321.firebaseapp.com",
  projectId: "facebook-321",
  storageBucket: "facebook-321.appspot.com",
  messagingSenderId: "1015862103756",
  appId: "1:1015862103756:web:9249dec847f19206cc7c69",
  measurementId: "G-77S9MYDEY9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db