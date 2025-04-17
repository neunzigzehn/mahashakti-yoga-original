
import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import App from './App.tsx'
import './index.css'

// Add proper error handling for production builds
const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
