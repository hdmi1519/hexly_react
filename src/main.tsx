import { createRoot } from 'react-dom/client'
import App from '@app/app'

import '@styles/root.css'

createRoot(document.getElementById('application')!).render(
    <App />
)
