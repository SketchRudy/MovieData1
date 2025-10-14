export default function MovieActorCard(props) {

     const actorsList = props.actors.map((actor) => {
      return (
        <li>
            {actor} 
        </li>
        
      )
    })

    return (
        <ul>
            {actorsList}
        </ul>
    )
}
