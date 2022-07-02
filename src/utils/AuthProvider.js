import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Cookie from 'js-cookie';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true);

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
                auth,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider }

export default AuthContext 