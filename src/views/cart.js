import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";


const CartView = () => {
    const navigate = useNavigate();

    const { productosAgregados, clear } = useContext(CartContext);

    const handleFinalizePurchase = () => {
        setTimeout(() => {
            clear();
            alert("compra finalizada");
            navigate("/");
        })
    }
    console.log("despues");
    console.log(productosAgregados);


  return (
    <Layout>
      <div className="d-flex justify-content-center">
        {productosAgregados.Length === 0 ? (
          <div>
            <h1>No has agregado productos</h1>
          </div>
        ) : (
          <div >
            <div className="d-flex justify-content-center">
              {productosAgregados.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div>
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div>
                <button
                  onClick={handleFinalizePurchase}>
                  Finalizar Compra
                </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;