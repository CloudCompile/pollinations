import { createTheme } from "@mui/material/styles";
import { Colors, Fonts } from "../config/global";

/**
 * Custom theme for Material UI components
 * Light mode theme matching enter.pollinations.ai design
 */
export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: Colors.magenta,
        },
        secondary: {
            main: Colors.gold,
        },
        background: {
            default: Colors.mint,
            paper: Colors.offwhite,
        },
        text: {
            primary: Colors.darkBlue,
            secondary: Colors.grayTeal,
        },
        error: {
            main: Colors.special,
        },
    },
    typography: {
        fontFamily: Fonts.parameter,
        h1: {
            fontFamily: Fonts.title,
            color: Colors.darkBlue,
        },
        h2: {
            fontFamily: Fonts.title,
            color: Colors.darkBlue,
        },
        h3: {
            fontFamily: Fonts.headline,
            color: Colors.darkBlue,
        },
        h4: {
            fontFamily: Fonts.headline,
            color: Colors.darkBlue,
        },
        h5: {
            fontFamily: Fonts.headline,
            color: Colors.darkBlue,
        },
        h6: {
            fontFamily: Fonts.headline,
            color: Colors.darkBlue,
        },
        button: {
            fontFamily: Fonts.parameter,
            textTransform: "none",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
                contained: {
                    backgroundColor: Colors.magenta,
                    color: "#ffffff",
                    "&:hover": {
                        backgroundColor: `${Colors.magenta}dd`,
                    },
                },
                outlined: {
                    borderColor: Colors.darkBlue,
                    color: Colors.darkBlue,
                    "&:hover": {
                        borderColor: Colors.magenta,
                        backgroundColor: `${Colors.magenta}11`,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: `${Colors.darkBlue}44`,
                        },
                        "&:hover fieldset": {
                            borderColor: Colors.magenta,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: Colors.magenta,
                        },
                    },
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    color: Colors.magenta,
                },
                track: {
                    color: Colors.magenta,
                },
                rail: {
                    color: `${Colors.grayTeal}66`,
                },
            },
        },
    },
});
