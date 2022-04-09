import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay Proveedor de Autenticacion");
  return context;
};

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const firebaseRegisterUser = async (nombre,email,password) => {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    return await updateProfile(user, {
      displayName: nombre
    });
  };

  const firebaseLogIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const firebaseLogout = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        firebaseRegisterUser,
        firebaseLogIn,
        user,
        firebaseLogout,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
