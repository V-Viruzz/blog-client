import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'virtual:uno.css'
import { LuxProvider } from './context/lux.tsx'
import { ErrorProvider } from './context/error.tsx'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <LuxProvider>
            <ErrorProvider>
                <App />
            </ErrorProvider >
        </LuxProvider>
    </StrictMode>
)
