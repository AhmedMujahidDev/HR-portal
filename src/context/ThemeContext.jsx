import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
// global theme store create
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("system")
    // page refresh hone par save rahe ga
    useEffect(() =>{
        const savedTheme= localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])
    // jab bhi theme change hoga ye useEffect run hoga
    useEffect(()=>{
        const root= window.document.documentElement
        root.classList.remove("light", "dark")
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark" : "light"
            root.classList.add(mediaQuery)
            return
        }
        root.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
  )
}

export default ThemeProvider