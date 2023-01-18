import { createContext, useState } from "react";


export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [ productosAgregados, setProductosAgregados ] = useState ([]);



    function addItem (item, cantidad) {
        const yaEstaAgregado = isInCart (item.id);
        if (yaEstaAgregado) {
            setProductosAgregados((estadoPrevio) => 
                estadoPrevio.map((productoAgregado) =>
                    productoAgregado.item.id === item.id
                    ? {
                        ...productoAgregado,
                        cantidadAgregada : productoAgregado.cantidadAgregada + cantidad,
                    }
                    : productoAgregado
                )
            );
        }
        else {
            setProductosAgregados((estadoPrevio) =>
            estadoPrevio.concat ({ item, cantidadAgregada: cantidad }) 
            );
        }
    }   

    function removeItem(itemId) {
        setProductosAgregados((estadoPrevio) => 
        estadoPrevio.filter((product) => product.item.id !== itemId)
        );
    }

    function clear() {
        setProductosAgregados([]);
    }

    function isInCart(itemId) {
        return Boolean(productosAgregados.find((product) => product.item.id === itemId));
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, productosAgregados,}}>
            {children}
        </CartContext.Provider>
    );
};

