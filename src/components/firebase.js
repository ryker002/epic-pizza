import firebase from "firebase/app"
import "firebase/analytics" // importing the auth module as an example

// Firebase web config
const config = {
  apiKey: "AIzaSyCKAyvtHU6IskdbcW523wpIfANTUveXo3k",
  authDomain: "lewandowski-design.firebaseapp.com",
  databaseURL: "https://lewandowski-design.firebaseio.com",
  projectId: "lewandowski-design",
  storageBucket: "lewandowski-design.appspot.com",
  messagingSenderId: "84715934435",
  appId: "1:84715934435:web:2e65c00ff31c281b8aebd6",
  measurementId: "G-V2ZX7QMXMH",
}

let instance = null

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = firebase.initializeApp(config)
    return instance
  }

  return null
}
