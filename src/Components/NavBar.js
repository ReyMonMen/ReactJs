import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">SmartSheep</a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                </li>
            </ul>
      <span class="navbar-text">
        <CartWidget />
      </span>
    </div>
  </div>
</nav>
            
    );
};

export default NavBar;