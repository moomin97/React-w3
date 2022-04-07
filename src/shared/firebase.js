import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBs1_LfPrQzBvb91rx34yNDC2VbjNWgo9I",
  authDomain: "week3-react-8e73c.firebaseapp.com",
  projectId: "week3-react-8e73c",
  storageBucket: "week3-react-8e73c.appspot.com",
  messagingSenderId: "421781041448",
  appId: "1:421781041448:web:7080010ec29c319a46e01d",
  measurementId: "G-ZB6QXZ7Q1W"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
export{auth, apiKey};