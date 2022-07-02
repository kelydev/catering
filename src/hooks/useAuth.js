import { useContext } from "react";
import AuthContext from "../utils/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;