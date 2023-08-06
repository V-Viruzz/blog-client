import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'virtual:uno.css'
import { LuxProvider } from './context/lux.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <LuxProvider>
        <App />
    </LuxProvider>
)
