import { useNavigate } from "react-router-dom";
import { navigateToPokedexPage, navigateToPokeListPage, navigateToPreviousPage } from "../routes/coordinator";

function Header(props) {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.actualPage) {
      case "pokelist":
        return (
          <>
            <h1>Pokemons</h1>
            <nav>
              <button onClick={() => navigateToPokedexPage(navigate)}>
                Ir para Pokedex
              </button>
            </nav>
          </>
        )
        case "pokedex":
          return (
            <>
              <h1>Pokedex</h1>
              <nav>
                <button onClick={() => navigateToPokeListPage(navigate)} >Ir para lista de Pokemons</button>
              </nav>
            </>
          )
          case "pokedetails":
            return (
              <>
                <h1>Detalhes</h1>
                <nav>
                  <button onClick={() => navigateToPreviousPage(navigate)} >Voltar</button>
                </nav>
              </>
            )
            default:
              return
    }
  }

  return (
    <>
      <header>
        {renderHeader()}
      </header>
    </>
  )
}

export default Header;
