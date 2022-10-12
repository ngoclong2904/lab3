import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { NavLink } from "react-router-dom"
export default function Navigation() {
    const { dark, theme, toggle } = useContext(ThemeContext)
    let navLinkStyle = {
        textAlign: "center",
        padding: "15px 3px 15px 3px",
        width: "25%",
        listStyleType: "none",
        fontSize: "1.2em"
    }
    let activeStyle = {
        backgroundColor: theme.focusedBackgroundColor,
        color: theme.focusedTextColor,
        textAlign: "center",
        padding: "15px 3px 15px 3px",
        width: "25%",
        listStyleType: "none",
        fontSize: "1.2em"
    }

    return (
        <div style={{ position: "relative" }}>
            <nav style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.contentTextColor }}>
                <ul>
                    {/* <li style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}><a className="active" href="#home">Home</a></li> */}
                    <NavLink to="/" end style={({ isActive }) => isActive ? activeStyle : navLinkStyle}><li>Home</li></NavLink>
                    <NavLink to="/news" style={({ isActive }) => isActive ? activeStyle : navLinkStyle}><li>News</li></NavLink>
                    <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : navLinkStyle}><li>About</li></NavLink>
                    <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : navLinkStyle}><li>Contact</li></NavLink>
                </ul>
            </nav>

            <div>
                <span className="switch-mode" onClick={toggle}
                    style={{
                        backgroundColor: theme.primaryBackgroundColor,
                        color: theme.contentTextColor,
                        outline: "none"
                    }} data-testid="toggle-theme-btn">
                    Switch to {dark ? "Light" : "Dark"} Mode
                </span>
            </div>
        </div>
    )
}