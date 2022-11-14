
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationES from "../data/translationES.json"
import translationEN from "../data/translationEN.json";


//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

//i18N Initialization

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;