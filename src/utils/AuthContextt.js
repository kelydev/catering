import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token} = await axios.post('http://localhost:8000/auth/signin',{ email, password }, options);
    console.log(access_token);

    if (access_token) {
      console.log("entra");
      const token = access_token.access_token;
      console.log(token);
      Cookie.set('token', token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get("http://localhost:8000/users/profile");
      setUser(user);
      console.log(user.user.name);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logout,
  };
}