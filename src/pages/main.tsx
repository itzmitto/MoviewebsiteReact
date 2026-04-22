import '../styling/main.css'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const featuredMovies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    genre: 'Sci-Fi',
    year: 2024,
    rating: 8.7,
    image: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    description: 'Paul Atreides vereinigt sich mit den Fremen um Rache zu nehmen an den Verrätern seiner Familie.',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    genre: 'Drama',
    year: 2023,
    rating: 8.5,
    image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    description: 'Het verhaal van de Amerikaanse wetenschapper J. Robert Oppenheimer en zijn rol bij de ontwikkeling van de atoombom.',
  },
  {
    id: 3,
    title: 'The Batman',
    genre: 'Action',
    year: 2022,
    rating: 7.8,
    image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    description: 'Batman ontdekt corruptie in Gotham City terwijl hij een seriemoordenaar opspoort.',
  },
  {
    id: 4,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    year: 2014,
    rating: 8.6,
    image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description: 'Een groep astronauten reist door een wormgat op zoek naar een nieuwe thuis voor de mensheid.',
  },
  {
    id: 5,
    title: 'The Godfather',
    genre: 'Crime',
    year: 1972,
    rating: 9.2,
    image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLeMMovXDsRm.jpg',
    description: 'De vergrijzende patriarch van een misdaadfamilie draagt de controle van zijn geheime imperium over.',
  },
  {
    id: 6,
    title: 'Inception',
    genre: 'Thriller',
    year: 2010,
    rating: 8.8,
    image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    description: 'Een dief die droomtechnologie gebruikt om bedrijfsgeheimen te stelen krijgt een kans om zijn misdaden uit te wissen.',
  },
]

const genres = ['Alle', 'Sci-Fi', 'Drama', 'Action', 'Crime', 'Thriller']

function MainPage() {
  const [activeGenre, setActiveGenre] = useState('Alle')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMovies = featuredMovies.filter((movie) => {
    const matchesGenre = activeGenre === 'Alle' || movie.genre === activeGenre
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGenre && matchesSearch
  })

  return (
    <div className="site-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">🎬 Nu in de bioscoop</span>
          <h1 className="hero-title">Ontdek de Beste Films</h1>
          <p className="hero-subtitle">
            Van blockbusters tot klassiekers — vind jouw volgende favoriete film.
          </p>
          <a href="/movies" className="hero-btn">Bekijk alle films</a>
        </div>
        <div className="hero-scroll-hint">↓</div>
      </section>

      {/* Search & Filter */}
      <section className="filter-section">
        <div className="container">
          <input
            type="text"
            className="search-bar"
            placeholder="🔍  Zoek een film..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="genre-filters">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="movies-section">
        <div className="container">
          <h2 className="section-title">
            {activeGenre === 'Alle' ? 'Populaire Films' : activeGenre}
            <span className="movie-count">{filteredMovies.length} films</span>
          </h2>
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {filteredMovies.length === 0 && (
            <div className="no-results">
              <p>😕 Geen films gevonden voor "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <span className="footer-logo">🎥 CineVault</span>
          <p>© 2024 CineVault. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainPage