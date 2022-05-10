import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

var config = {
  apiKey: "AIzaSyA5F3TAgTRYBDLJaQ1bGM142GDLgFFpOco",
  authDomain: "todo-ninja-50ad2.firebaseapp.com",
  projectId: "todo-ninja-50ad2",
  storageBucket: "todo-ninja-50ad2.appspot.com",
  messagingSenderId: "259582391147",
  appId: "1:259582391147:web:d078140aa09b7bb96bd22e",
  measurementId: "G-205FKF086Z"
};

firebase.initializeApp(config)
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })

export default db;
