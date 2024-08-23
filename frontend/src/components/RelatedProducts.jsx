import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import PropTypes from "prop-types";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [realted, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productCopy.slice(0, 5));
    }
  }, [category, subCategory, products]);

  return (
    <div className="my-24">
      <div className=" text-center text-3xl py-2">
        <Title text1={"related"} text2={"products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {realted.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

RelatedProducts.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
};

export default RelatedProducts;
