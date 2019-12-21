import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-p8aFdd5j4kCU13nrpoz7aBAaugrFZdc",
  authDomain: "unicorncharityclub-5e859.firebaseapp.com",
  databaseURL: "https://unicorncharityclub-5e859.firebaseio.com",
  projectId: "unicorncharityclub-5e859",
  storageBucket: "unicorncharityclub-5e859.appspot.com",
  messagingSenderId: "372250803810",
  appId: "1:372250803810:web:b3d0ec1dd19ab8947a9b3b",
  measurementId: "G-3E46NFBZCE"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
