import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPl85m0kBDHh-3jSvDAiA6_F4nXKEUrGI",
  authDomain: "openinapp-f1652.firebaseapp.com",
  projectId: "openinapp-f1652",
  storageBucket: "openinapp-f1652.appspot.com",
  messagingSenderId: "339558538565",
  appId: "1:339558538565:web:64295feb2455ae69b6722c",
  measurementId: "G-DR6C93MXXV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;