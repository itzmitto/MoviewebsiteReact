import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import BrowsePage from './pages/browse'
import SettingsPage from './pages/settings'
import HistoryPage from './pages/history'
import SchedulePage from './pages/schedule'
import RandomPage from './pages/random'
import PlaylistPage from './pages/playlist'
import FavorietenPage from './pages/favorieten'
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
        <Route path="/random" element={<RandomPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/Favorieten" element={<FavorietenPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App