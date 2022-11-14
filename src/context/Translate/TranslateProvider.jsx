import TranslateContext from "./TranslateContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    const { i18n } = useTranslation();

    const toggleLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguage(language);
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage
    };

    return (
        <TranslateContext.Provider value={value}>{children}</TranslateContext.Provider>
    );
}

export default TranslateProvider;