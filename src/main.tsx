import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'virtual:uno.css'
import { LuxProvider } from './context/lux.tsx'
import { ErrorProvider } from './context/error.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <LuxProvider>
        <ErrorProvider>
            <App />
        </ErrorProvider >
    </LuxProvider>
)
