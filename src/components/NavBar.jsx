import "./NavBar.css"
import { Link } from "react-router-dom"

export default () => {

    return (
        <nav className="navegacion">
            <Link to="/">App de Contactos</Link>

            <Link to="/agregarContacto">
                <button className="boton primario">Agregar un contacto</button>
            </Link>
        </nav>
    )

}

