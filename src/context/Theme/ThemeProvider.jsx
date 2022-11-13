import ThemeContext from "./ThemeContext";
import { useState } from "react";

const LoginProvider = ({ children }) => {
    const [darkMode, serDarkMode] = useState(false);

    const value = {
        darkMode,
        serDarkMode,
    };
    const toggleDarkMode = () => {
        serDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default LoginProvider;