import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure your App component is a .tsx file

// Get the root element
const rootElement = document.getElementById('root') as HTMLElement; // TypeScript will require a type assertion here

// Create the root and render the application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
