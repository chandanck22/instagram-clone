// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOKrBBIDaV-CLg6aSdZGNyn_6WnSQLWGE",
  authDomain: "insta-clone-54097.firebaseapp.com",
  projectId: "insta-clone-54097",
  storageBucket: "insta-clone-54097.appspot.com",
  messagingSenderId: "434796498093",
  appId: "1:434796498093:web:c492fd4b43635816a18a24"
};


// const firebaseConfig = {
//   apiKey: process.env.react_app_apikey,
//   authDomain: process.env.react_app_authdomain,
//   projectId: process.env.react_app_projectid,
//   storageBucket: process.env.react_app_storagebucket,
//   messagingSenderId: process.env.react_app_messagingsenderid,
//   appId: process.env.react_app_appid,
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();