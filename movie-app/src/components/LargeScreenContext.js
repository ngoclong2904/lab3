import { createContext, useEffect, useReducer } from "react"

var LargeScreenContext = createContext(true)

function LargeScreenProvider({ children }) {
    // const [largeScreen, setLargeScreen] = useState(true)
    // const useLargeScreenSize = () => {
    // function handleResize() {
    //     setLargeScreen(window.matchMedia("(min-width: 992px)").matches)
    //     console.log("Screen is large: " + window.matchMedia("(min-width: 992px)").matches)
    // }
    function handleResize(a, b) {
        // console.log("LargeScreenReducer: state=" + a)
        // console.log("LargeScreenReducer: action=" + b)
        console.log("Screen is large: " + window.matchMedia("(min-width: 992px)").matches)
        return window.matchMedia("(min-width: 992px)").matches
    }
    const [largeScreen, doLargeScreen] = useReducer(handleResize, true)
    useEffect(() => {
        const resizeListener = window.addEventListener("resize", () => doLargeScreen())
        const loadListener = window.addEventListener("load", () => doLargeScreen())

        return () => { window.removeEventListener("resize", resizeListener); window.removeEventListener("load", loadListener) }
    })
    // }
    // useLargeScreenSize()

    return (
        <LargeScreenContext.Provider value={largeScreen}>
            {children}
        </LargeScreenContext.Provider>
    )
}

export { LargeScreenContext, LargeScreenProvider }