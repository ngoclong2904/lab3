const useThemeVariables = (theme) => {
    let root = document.querySelector(":root")

    root.style.setProperty("--box-shadow-color", `${theme.boxShadowColor}`)
    console.log(getComputedStyle(root).getPropertyValue("--box-shadow-color"))
}

export { useThemeVariables }