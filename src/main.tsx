import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'sonner'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Toaster position='top-center' />
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<App />
		</ThemeProvider>
	</StrictMode>
)
