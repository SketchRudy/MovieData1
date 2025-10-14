export default function MovieActorCard(props) {

     const actorsList = props.actors.map((actor) => {
      return (
        <section>
            {actor} 
        </section>
        
      )
    })

    return (
        <section>
            {actorsList}
        </section>
    )
}
