import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFillter, setShowFilter] = useState(true);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  console.log(filterProduct);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFillter)}
          className="my-2 text-xl  flex items-center cursor-pointer gap-2 uppercase"
        >
          filters
          <img
            className={`h-3 sm:hidden ${showFillter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFillter ? "" : "hidden"
          }`}
        >
          <p className="uppercase mb-3 text-sm font-medium">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kid"} />
              Kid
            </p>
          </div>
        </div>
        {/* subcategories filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-5 ${
            showFillter ? "" : "hidden"
          }`}
        >
          <p className="uppercase mb-3 text-sm font-medium">types</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all"} text2={"collections"} />
          {/* product sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-hight">Sort by: Low to hight</option>
            <option value="hight-low">Sort by: Hight to low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((product, index) => {
            return (
              <ProductItem
                key={index}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
