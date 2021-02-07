import  firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/database"
import  "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA33m3UHqvOooYf7HFQULi4dETvyP9ay5g",
  authDomain: "flash-delivery-5d8a9.firebaseapp.com",
  projectId: "flash-delivery-5d8a9",
  storageBucket: "flash-delivery-5d8a9.appspot.com",
  messagingSenderId: "584007073227",
  appId: "1:584007073227:web:42f151a66e89f8a752ca4e",
  measurementId: "G-L55KQ908SR"

});

const projectFirestore = firebase.firestore();
const projectDatabase = firebase.database();
const projectAuh = firebase.auth();



export {projectFirestore,projectDatabase,projectAuh}

export default app