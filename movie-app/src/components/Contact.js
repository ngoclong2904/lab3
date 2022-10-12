import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Contact() {
    const { theme } = useContext(ThemeContext)

    return (
        <div id="contact" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <div id="contact-1" className="column" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div id="contact-1-bg" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                    < div id="contact-1-bgimg" style={{
                        backgroundImage: `url("/assets/icons/email.png")`, backgroundSize: "contain",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }} />
                </div>
                <p id="contact-1-info">Home@Nowhere.net</p>
            </div>

            <div id="contact-2" className="column" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div id="contact-2-bg" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                    < div id="contact-2-bgimg" style={{
                        backgroundImage: `url("/assets/icons/call.png")`, backgroundSize: "contain",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }} />
                </div>
                <p id="contact-2-info">03338811226</p>
            </div>

            <div id="contact-3" className="column" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div id="contact-3-bg" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                    < a href="https://twitter.com" target="_blank" rel="noreferrer" id="contact-3-bgimg" style={{
                        backgroundImage: `url("/assets/icons/twitter.png")`, backgroundSize: "contain",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }} >
                        <p style={{ position: "absolute", visibility: "hidden" }}>Twitter</p>
                        </a>
                </div>
                {/* <p id="contact-3-info"></p> */}
            </div>

            <div id="contact-4" className="column" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                <div id="contact-4-bg" style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}>
                    < div id="contact-4-bgimg" style={{
                        backgroundImage: `url("/assets/icons/pin.png")`, backgroundSize: "contain",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }} />
                </div>
                <p id="contact-4-info">At the nexus of Hollow Earth</p>
            </div>
        </div>
    )
}

export default Contact