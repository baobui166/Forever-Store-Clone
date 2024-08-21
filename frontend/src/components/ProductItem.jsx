import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, name, price, image }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-[700]">
        {currency}
        {price}
      </p>
    </Link>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.array,
};

export default ProductItem;
