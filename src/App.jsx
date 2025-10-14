import Header from './components/Header' ;
import Footer from './components/Footer';
import MovieCard from "./components/MovieCard";
import movies from "./data";
import MovieDataCard from './components/MovieDataCard';

function App() {
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
      <section>
      <Header/>
      {movieData}
      <Footer/>
      </section>
      )
    }


export default App
