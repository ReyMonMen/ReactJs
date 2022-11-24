const Item = ({ product }) => {
    return (
      <div>
        <img src={product.img} className="img-thumbnail" alt="Product" />
        <li>{product.name}</li>
      </div>
    );
};
  
export default Item;