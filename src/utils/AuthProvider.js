import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Cookie from 'js-cookie';
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
/*import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";*/

//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true);

    /*const firebaseRegisterUser = async (nombre,email,password) => {
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
    };*/
    useEffect(() => {
        const autenticar = async () => {
            try {
                const token = localStorage.getItem('token');
                if(!token) {
                    return console.log('nono hay token');
                }
                console.log('si hay token');
                axios.defaults.headers.Authorization = `Bearer ${token}`;
                const { data } = await axios.get("http://localhost:8000/users/profile");
                console.log(data);
                setAuth(data);
            } catch (error) {
                console.log(error);
            }
        }
        autenticar();
    }, []);

    const logout = () => {
        //localStorage.removeItem('token');
        Cookie.remove('token')
        setAuth(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider
            value={{
                setAuth,
                logout,
                loading,
            //firebaseRegisterUser,
            //firebaseLogIn,
            //user,
            //firebaseLogout,
            //loading,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider }

export default AuthContext 