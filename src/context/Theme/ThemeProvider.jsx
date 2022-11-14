import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.body.style.backgroundColor = !darkMode ? "#395999" : "#fff";
        setDarkMode(!darkMode);
    };

    const value = {
        darkMode,
        setDarkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default ThemeProvider;