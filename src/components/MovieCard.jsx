import MovieActorCard from "./MovieActorCard";
import MovieDataCard from "./MovieDataCard";


export default function MovieCard(props) {
    
    const cName = props.musical? "movieCardMusical": "movieCard"
    
    return (
    <section className={cName}>
            <MovieDataCard className="movieDataCard"
                key = {props.id}
                id = {props.id}
                name = {props.name}
                genre = {props.genre}
                releaseDate = {props.releaseDate}
                musical = {props.musical}
            />
            <MovieActorCard className = "movieActorCard"
                actors = {props.actors}
            />
        </section>
) 

}