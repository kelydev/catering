import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = () => {
  const config = {
    apiKey: "AIzaSyAU3dPz61myLfRYluViD8Cs0wl4iEKZzVI",
    authDomain: "catering-286ae.firebaseapp.com",
    projectId: "catering-286ae",
    storageBucket: "catering-286ae.appspot.com",
    messagingSenderId: "993839264982",
    appId: "1:993839264982:web:671a4f76c195b61b4b0577",
    measurementId: "G-1LZ9SD5MNT"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}

export const firebaseRegisterUser = (email, password) => {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(credentials => {
      console.log(credentials);
    })
}

export const firebaseLogIn = async (credentials) => {
  const {email,password} = credentials;
  try {
    const auth = getAuth();
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};