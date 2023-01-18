import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }


    return (
      <div>
        <div>
          <img src={item.img} alt="" /></div>
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <span>Precio: ${item.price}</span>
            {currentStock > 0 && (
            <p>En Stock: {currentStock}</p>
        )}

        <div>
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
            ) : (
            <span>Sin stock</span>
            )}
            <div>
              <button
                onClick={handleAdd}
                disabled={currentStock === 0}>
                Agregar al carrito
              </button>
             <button
                onClick={handleCheckout}>
                Finalizar Compra
             </button>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default ItemDetail;