
export default function MovieDataCard(props) {
    
    const month = props.releaseDate.toLocaleString('default', { month: 'long' });
    const year = props.releaseDate.getFullYear();
    const date = `${month} ${year}`;   
    
    return (
        <section>
            <h2>{props.name}</h2>
            <div>
                <p>{props.genre}</p>
                <p>{date}</p>
            </div>

        </section>
    )
}
