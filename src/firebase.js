// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgXGNElqTBFMSRBvWbkn0Jmoc6avCK7M",
  authDomain: "nwitter-1b973.firebaseapp.com",
  projectId: "nwitter-1b973",
  storageBucket: "nwitter-1b973.appspot.com",
  messagingSenderId: "1003228978943",
  appId: "1:1003228978943:web:81c14a761aafccf022b6ca"
};

export default firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);