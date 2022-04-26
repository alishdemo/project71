import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
apiKey: "AIzaSyAL8xQx8Tm7I1U1wfe2-xN3-qS1WR316Pc",
  authDomain: "e-ride-31c09.firebaseapp.com",
  projectId: "e-ride-31c09",
  storageBucket: "e-ride-31c09.appspot.com",
  messagingSenderId: "580056429040",
  appId: "1:580056429040:web:3405515c18e0655783ad35"

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
