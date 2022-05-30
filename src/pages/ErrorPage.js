import { useNavigate } from "react-router-dom"
import { navigateToPokeListPage } from "../routes/coordinator"

export function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Error 400 - Página não encontrada!</h1>
            <button onClick={() => navigateToPokeListPage(navigate)}>Voltar para página inicial</button>
        </div>
    )
}

export default ErrorPage