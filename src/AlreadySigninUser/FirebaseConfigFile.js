import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD_36kC5qUBJSmmyOJbYcO7LGaYDYqzRKQ",
    authDomain: "fir-yt-536e4.firebaseapp.com",
    projectId: "fir-yt-536e4",
    storageBucket: "fir-yt-536e4.appspot.com",
    messagingSenderId: "22549970528",
    appId: "1:22549970528:web:886ab0fccdfbab66118d05"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
export {auth,provider};