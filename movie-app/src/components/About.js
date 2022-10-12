import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function About() {
    const { theme } = useContext(ThemeContext)
    return (
        <div id="news" className="container" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor, minHeight: "100vh" }}>
            <h1 style={{ width: "100%", textAlign: "center", color: "red", gridArea: "2/2/3/3" }}>
                REDACTED
            </h1>
        </div>
    )
}
