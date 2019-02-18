import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSroDrxkEPKd1Tc8OQrL3283KFqPh1DEU",
  authDomain: "net-ninja-marioplan-8661a.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-8661a.firebaseio.com",
  projectId: "net-ninja-marioplan-8661a",
  storageBucket: "net-ninja-marioplan-8661a.appspot.com",
  messagingSenderId: "288044752051"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
