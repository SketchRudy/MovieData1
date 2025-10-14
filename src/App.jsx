import Header from './components/Header' ;
import Footer from './components/Footer';
import MovieCard from "./components/MovieCard";
import movies from "./data";

export default function App() {
  
  const movieData = movies.map((movie) => {
    return (
      <MovieCard 
        key = {movie.id}
        id = {movie.id}
        name = {movie.name}
        genre = {movie.genre}
        actors = {movie.actors}
        releaseDate = {movie.releaseDate}
        musical = {movie.musical}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
         {movieData}
      </main>
      <Footer />
    </>
  )
}
