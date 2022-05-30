import { useParams } from "react-router-dom"
import Header from "../components/Header"

export function PokeDetailsPage() {
    const params = useParams()

    return (
      <>
        <Header actualPage={"pokedetails"} />
        <hr />
        <main>
            <h1>PokeInfos</h1>
            <h2>Nome: {params.pokeName.toUpperCase()}</h2>
        </main>
      </>
    )
  }

  export default PokeDetailsPage