import firebase from "firebase";
import firebaseConfig from "./config.js";

firebase.initializeApp(firebaseConfig);

//   console.log(firebaseConfig.apiKey);
//   console.log(firebaseConfig.authDomain);
//   console.log(firebaseConfig.databaseURL);
//   console.log(firebaseConfig.storageBucket);
//   console.log(firebaseConfig.messagingSenderId);
//   console.log(firebaseConfig.appId);
//   console.log(firebaseConfig.measurementId);
export default firebase;
