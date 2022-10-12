import { createContext, useEffect, useState } from "react"
import { themes } from "../shared/Themes"
import { useThemeVariables } from "./ThemeContextHelper"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    useEffect(() => {
        const isDark = localStorage.getItem("dark") === "true"
        // console.log("ThemeProvider's Effect")
        setDark(isDark)
    }, [dark])

    // const useModeTitle = () => {
    useEffect(() => {
        let mode = dark ? "Theatre Mode" : "Normal Mode";
        document.title = "Film Showcase - " + mode
    })
    // }
    // useModeTitle()

    const theme = dark ? themes.dark : themes.light

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem("dark", JSON.stringify(isDark))
        setDark(isDark)
    }

    useThemeVariables(theme)

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }