import { Link } from "react-router"
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav-estilos" aria-label="Navegación principal">
            <div className="usuario">{"Usuario: David Pallares"}</div>
            <Link to="/">Inicio</Link>
            <Link to="/misclases">Mis Clases</Link>
            <Link to="/docentes">Docentes</Link>
        </nav>
    )
}

export default Nav
