import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { items } from "../mocks/item.mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => resolve(items.find((item) => item.id === id)), 1000)
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
  <div>
    <ItemDetail item={item} />
  </div>
  );
};

export default ItemDetailContainer;