import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFXlk_OZo6RRX1mgUV8sy35xZoRcmPTQ0",
  authDomain: "facebook-clone-5cc84.firebaseapp.com",
  projectId: "facebook-clone-5cc84",
  storageBucket: "facebook-clone-5cc84.appspot.com",
  messagingSenderId: "43817721898",
  appId: "1:43817721898:web:168dda12adba2dccefe353",
  measurementId: "G-HS75T11LFM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
