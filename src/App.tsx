import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import BrowsePage from './pages/browse'
import SettingsPage from './pages/settings'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App