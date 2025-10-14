import MovieActorCard from "./MovieActorCard";
import MovieDataCard from "./MovieDataCard";


export default function MovieCard(props) {
    return (
        <section className = "mac2">
            <section className = "mac">
            <MovieActorCard
                actors = {props.actors}
            />
            <MovieDataCard
                key = {props.id}
                id = {props.id}
                name = {props.name}
                genre = {props.genre}
                releaseDate = {props.releaseDate}
                musical = {props.musical}
            />
            </section>
        </section>
    ) 

}