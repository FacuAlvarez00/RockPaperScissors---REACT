// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, doc, setDoc, collection} from "firebase/firestore"
import { UserAuth } from "./context/AuthContext";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jvGWVsO7_omVa6XOaQO2VgLhTTmwgos",
  authDomain: "rockpaperscissors-25e4d.firebaseapp.com",
  projectId: "rockpaperscissors-25e4d",
  storageBucket: "rockpaperscissors-25e4d.appspot.com",
  messagingSenderId: "211617757699",
  appId: "1:211617757699:web:395587e746874f53e4ec36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)

/*  const {user, points} = UserAuth()  

 if (user && points != null ){ 
  

const data = {
  campo1: 'valor1',
  campo2: 'valor2',
  uid: user.reloadUserInfo.localId 


};



async function createOrder(order) {
  
}



} 

 */