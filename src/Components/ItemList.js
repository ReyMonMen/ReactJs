import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul className="d-flex justify-content-center">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};
