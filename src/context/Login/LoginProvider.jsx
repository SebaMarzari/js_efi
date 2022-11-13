import LoginContext from "./LoginContext";
import { useState } from "react";

const LoginProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    const value = {
        isLogged,
        setIsLogged,
        user,
        setUser,
    };

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );
}

export default LoginProvider;