import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			light: '#B02D49',
			main: '#9A1632',
			dark: '#710E23',
			contrastText: '#FDFFFF',
		},

		info: {
			main: '#fff',
		},
	},
})