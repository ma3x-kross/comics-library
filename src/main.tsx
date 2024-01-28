import ReactDOM from 'react-dom/client'

// styles
import './index.css'

// Components
import App from './App.tsx'

// Store
import { Provider } from 'react-redux'
import store from 'store'

// routing
import { BrowserRouter } from 'react-router-dom'

// mui
import { ThemeProvider } from '@mui/material/styles'

// utils
import { theme } from 'utils/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
)
