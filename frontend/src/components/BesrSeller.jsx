import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BesrSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"best"} text2={"sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          accusamus vitae. Eligendi natus aperiam neque similique rem, ex
          quisquam sint? Labore, at itaque quibusdam magnam facere modi veniam
          sequi doloremque!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {bestSeller.map((item, index) => (
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

export default BesrSeller;
