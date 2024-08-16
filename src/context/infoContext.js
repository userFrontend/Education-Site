import { createContext, useContext, useEffect, useState } from "react"
import { changeLang } from "../language"

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    const [language, setLanguage] = useState(changeLang(localStorage.getItem("language")) || changeLang('ru'))
    const [theme, setTheme] = useState(localStorage.getItem("mode") || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        if(theme !== 'light'){
          localStorage.setItem('mode', 'light')
        } else if(theme !== 'dark'){
          localStorage.setItem('mode', 'dark')
        }
    };

    const handleLanguageChange = (lang) => {
      const newTranslations = changeLang(lang);
      setLanguage(newTranslations);
      localStorage.setItem('language', lang)
    };

    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
    }
     const value = {
        currentUser, setCurrentUser, exit,
        language, setLanguage, handleLanguageChange, 
        theme, setTheme, toggleTheme
    }

 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}