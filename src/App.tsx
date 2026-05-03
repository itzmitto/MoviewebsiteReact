import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import BrowsePage from './pages/browse'
import SettingsPage from './pages/settings'
import HistoryPage from './pages/history'
import SchedulePage from './pages/schedule'


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App