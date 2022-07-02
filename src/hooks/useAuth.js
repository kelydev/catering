import { useContext } from "react";
import AuthContext from "../utils/AuthProvider";

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("No hay Proveedor de Autenticacion");
    return context;
};

export default useAuth;
