import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
// @ts-ignore
import { initFlashLoader } from './js/fade.js';
import { BrowserRouter } from "react-router";

initFlashLoader();

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>   
  </StrictMode>,
)
