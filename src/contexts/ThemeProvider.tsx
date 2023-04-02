import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: `"Space Mono",
		monospace`,
	},
	palette: {
		primary: {
			main: "#000000",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: "white",
					border: "2px solid black",
					fontWeight: "bold",
					borderRadius: "12px",
					textTransform: "none",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					".MuiBackdrop-root": { backgroundColor: "transparent" },
					".MuiPaper-root": {
						backgroundColor: "#F5F5F5",
						border: "2px solid black",
						borderRadius: "12px",
						maxWidth: "none",
						margin: "0",
					},
				},
			},
		},
	},
});
export default function CustomThemeProvider({ children }: { children: any }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
