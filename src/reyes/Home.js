import { Link } from "react-router-dom"

export default function Home() {
    const lista = [ "Atanagildo", "Ataulfo", "Ervigio", "Leovigildo", "Recesvinto", "Sisebuto" ]
  return (
    <div className="reyes">
    {
        lista.map((unRey) =>
            <Link to={`/${unRey}`}>
                <img src={`https://www.html6.es/img/rey_${unRey}.png`} alt={unRey} />
            </Link>
        )
    }
    </div>
  )
}
