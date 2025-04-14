
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we're finding the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Could not find root element to mount React app");
} else {
  createRoot(rootElement).render(<App />);
}
