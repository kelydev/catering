import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const autenticar = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                return console.log('nono hay token');
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await axios.get("https://immense-lowlands-06812.herokuapp.com/users/profile", config);
                console.log(data);
                setAuth(data)

            } catch (error) {
                console.log(error);
            }
        }
        autenticar();
      
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider
            value={{
                setAuth,
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