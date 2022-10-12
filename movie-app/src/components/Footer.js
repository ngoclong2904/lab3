import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <footer style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.focusedTextColor }}>
            <span>copyright &copy; 2022</span>
        </footer>
    )
}