import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1PSFcTXP15lcN-kEZ4cyhoICtXLZSJKA",
  authDomain: "staymaster-ccb62.firebaseapp.com",
  projectId: "staymaster-ccb62",
  storageBucket: "staymaster-ccb62.appspot.com",
  messagingSenderId: "226600090078",
  appId: "1:226600090078:web:32a5fe0a28d7b5dcb3854f",
  measurementId: "G-T8Q4L1SNGK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
