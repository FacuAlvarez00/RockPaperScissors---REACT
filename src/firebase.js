
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, doc, setDoc, collection, getDoc, getDocs, updateDoc} from "firebase/firestore"






const firebaseConfig = {
  apiKey: "AIzaSyB2jvGWVsO7_omVa6XOaQO2VgLhTTmwgos",
  authDomain: "rockpaperscissors-25e4d.firebaseapp.com",
  projectId: "rockpaperscissors-25e4d",
  storageBucket: "rockpaperscissors-25e4d.appspot.com",
  messagingSenderId: "211617757699",
  appId: "1:211617757699:web:395587e746874f53e4ec36"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)


export async function getOrderScore(uid) {
  const orderRef = doc(db, "order", uid); 

  const docSnap = await getDoc(orderRef); 

  let userAlreadyPlayed = false;
  let scoreFromDatabase = null;
  let winsFromDatabase = null
  let loosesFromDatabase = null
  let avatarFromDatabase = null
  let playedonceFromDatabase = null

  if (docSnap.exists()) {
    userAlreadyPlayed = true;
    scoreFromDatabase = docSnap.data().score; 
    winsFromDatabase = docSnap.data().wins
    loosesFromDatabase = docSnap.data().looses
    avatarFromDatabase = docSnap.data().avatar
    playedonceFromDatabase = docSnap.data().userPlayedOnce
  } 
  return {
    userAlreadyPlayed,
    scoreFromDatabase,
    winsFromDatabase,
    loosesFromDatabase,
    avatarFromDatabase,
    playedonceFromDatabase
  };
  
}

export async function createOrder(order) {
  const orderRef = doc(db, "order", order.userinfo);
  let respuesta = await setDoc(orderRef, order);
  return respuesta
}
export async function updateScore(order) {
  const orderRef = doc(db, "order", order.userinfo);
  let respuesta = await updateDoc(orderRef, order);
  return respuesta
}
export async function updateAvatar(order) {
  const orderRef = doc(db, "order", order.userinfo);
  let respuesta = await updateDoc(orderRef, order);
  return respuesta
}


export async function getUserInfo(){
  const productsRef = collection(db, "order")
  const snapshot = await getDocs(productsRef)

      const users = snapshot.docs.map((item) => {
          let product = item.data()
          product.id = item.id
          return product
      })
      return(users)
}