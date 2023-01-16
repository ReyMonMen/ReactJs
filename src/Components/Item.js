import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const description = product.description.slice(0, 30);
  const title = product.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

    return (
      <div onClick = {handleNavigate}>
        <div>
        <img src={product.img} className="img-thumbnail" alt="Product" />
        <hr/>
        <span>{product.name.length > 20 ? `${title}...` : product.name}</span>
        <hr/>
        <p>
          {product.description.length > 30 ? `${description}...` : product.description }
        </p>
        </div>
        <div>
        <hr/>
        <div>
          <span >${product.price}</span>
          <hr/>
          <span >In Stock: {product.stock}</span>
        </div>
      </div>
      </div>
    );
};
  
export default Item;