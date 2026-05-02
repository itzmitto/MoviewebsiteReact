import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import BrowsePage from './pages/browse'
import SettingsPage from './pages/settings'
import HistoryPage from './pages/history'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/history" element={<HistoryPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App