import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext";


const CartWidget = () => {
    const { productosAgregados } = useContext(CartContext);
    const cuenta = productosAgregados.length;

  return (
        <div>
            <Link to="/cart">
                <button className="bg-primary">
                    <i className="bi bi-cart3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </i>
                </button>
                {cuenta > 0 && (
                    <span>
                        {cuenta}
                    </span>
                )}  
            </Link>
        </div>
  ); 

};

export default CartWidget;