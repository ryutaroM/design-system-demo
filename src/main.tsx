import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FigmaPage } from './pages/FigmaPage'

const path = window.location.pathname

function App() {
  if (path === '/figma') {
    return <FigmaPage />
  }
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-2xl font-bold">Design System Demo</h1>
      <p className="text-muted-foreground mt-2">
        Figma → React Component + Storybook 半自動生成デザインシステム
      </p>
      <a href="/figma" className="mt-4 inline-block text-primary underline">
        /figma — ランディングページプレビュー
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
