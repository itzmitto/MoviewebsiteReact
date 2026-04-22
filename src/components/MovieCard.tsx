import '../styling/moviecard.css'
import { useState } from 'react'

interface Movie {
  id: number
  title: string
  genre: string
  year: number
  rating: number
  image: string
  description: string
}

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  const [liked, setLiked] = useState(false)

  const stars = Math.round(movie.rating / 2) // convert to 5 stars

  return (
    <div className="movie-card">
      <div className="card-image-wrapper">
        <img src={movie.image} alt={movie.title} className="card-image" />
        <div className="card-overlay">
          <p className="card-description">{movie.description}</p>
          <a href={`/movie/${movie.id}`} className="card-watch-btn">Meer info</a>
        </div>
        <span className="card-genre">{movie.genre}</span>
        <button
          className={`card-like-btn ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-info">
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-meta">
          <span className="card-year">{movie.year}</span>
          <span className="card-rating">
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)} {movie.rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard