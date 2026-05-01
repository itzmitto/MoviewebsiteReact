import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import BrowsePage from './pages/browse'  
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App