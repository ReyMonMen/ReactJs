import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Importando Componente
import { ItemList } from "./ItemList";

// Importando Items
import { items } from "../mocks/item.mock";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 2000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
