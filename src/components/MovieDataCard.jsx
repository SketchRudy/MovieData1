
export default function MovieDataCard(props) {
    const Date = props.releaseDate.toString();
    return (
        <section>
            <h2>{props.name}</h2>
            <div>
                <p>{props.genre}</p>
                <p>{Date}</p>

            </div>

        </section>
    )
}
