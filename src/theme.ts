// istanbul ignore file
import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: "#D4A961",
            dark: "#D4A961",
            light: "#D4A961",
        },
        secondary: {
            main: "#A6A19B",
            dark: "#A6A19B",
            light: "#A6A19B",
        },
        info: {
            main: "rgba(68,152,238,1)",
            dark: "rgba(2,51,101,1)",
            light: "rgba(212,234,255,0.4)",
        },
        error: {
            main: "rgba(226,71,99,1)",
            dark: "rgba(173,12,42,1)",
            light: "rgba(255,223,229,0.3)",
        },
        warning: {
            main: "rgba(255,215,64,1)",
            dark: "rgba(180,120,0,1)",
            light: "rgba(252,235,193,0.3)",
        },
        success: {
            main: "rgba(0,230,178,1)",
            dark: "rgba(13,194,152,1)",
            light: "rgba(210,255,244,0.3)",
        },
        background: {
            paper: "#fff",
            default: "rgba(240,244,249,1)",
        },
        text: {
            primary: "rgba(41,48,54,1)",
            secondary: "rgba(46, 61, 74, 0.70)",
            disabled: "rgba(46, 61, 74, 0.36)",
        },
        grey: {
            A400: "rgba(41,48,54,1)",
            A700: "#F7FAFC",
        },
    },
    typography: {
        fontFamily: "Questrial",
        h1: {
            fontFamily: "Source Serif Pro",
            textAlign: "left",
            fontSize: "30px",
            fontWeight: 400,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        h2: {
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        h3: {
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        h4: {
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        h5: {
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        h6: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "140%",
            fontStyle: "normal",
        },
        subtitle1: {
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "100%",
            textTransform: "uppercase"
        },
        subtitle2: {
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "100%",
            textTransform: "uppercase",
            color: "#959392"
        },
        caption: {
            fontSize: "18px"
        },
        button: {
            fontSize: "22px",
            textTransform: "none",
            color: "white",
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 0
            }
        },
    },
});

export default theme;
