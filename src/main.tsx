
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx is executing");

// Make sure we're finding the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Could not find root element to mount React app");
} else {
  console.log("Found root element, mounting React app");
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React app mounted successfully");
  } catch (error) {
    console.error("Error rendering React app:", error);
  }
}
