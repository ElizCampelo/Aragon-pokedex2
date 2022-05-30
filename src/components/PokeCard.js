import { useNavigate } from "react-router-dom";
import { navigateToDetailsPage } from "../routes/coordinator";

function PokeCard(props) {

  const navigate = useNavigate()

  const { id, name } = props.pokemon

  return (
    <section>
      <span>{name.toUpperCase()} - </span>
      <span>N°: {id}</span>
      <br />
      <br />
      <button>Adicionar a Pokedex</button>
      <button onClick={() => navigateToDetailsPage(navigate, name)} >Ver detalhes</button>
      <br />
      <br />
      <hr />
    </section>
  );
};

export default PokeCard