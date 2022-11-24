import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link
            to="/"
            className="nav-link active" aria-current="page">SmartSheep</Link>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link
                    to="/"
                    className="nav-link active" aria-current="page">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/category/Mesas"
                    className="nav-link active" aria-current="page">Mesas</Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/category/Sillas    "
                    className="nav-link active" aria-current="page">Sillas</Link>
                </li>
            </ul>
      <span className="navbar-text">
        <CartWidget />
      </span>
    </div>
  </div>
</nav>
            
    );
};

export default NavBar;
