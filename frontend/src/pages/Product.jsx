import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [images, setImages] = useState([]);
  const [size, setSize] = useState("");

  const featchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImages(item.image[0]);
        return;
      }
    });
  };

  useEffect(() => {
    featchProductData();
  }, [productId]);

  console.log(productData);
  return productData ? (
    <div className="border-top pt-10 transition-opacity ease-in duration-50 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                onClick={() => setImages(img)}
                src={img}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={images} alt="" />
          </div>
        </div>
        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-400 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Selected Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border bg-gray-100 py-2 px-4 ${
                    item === size ? "border-orange-500" : ""
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="uppercase bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD To Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="">100% Original product.</p>
            <p className="">Cash on delivery is availble on this product</p>
            <p className="">Easy return and exchange policy within 7 days</p>
            <p className=""></p>
          </div>
        </div>
      </div>

      {/* comment and review */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-3 border px-6 py-6 text-sm text-gray-500">
          <p>
            At Forever, we believe that fashion is more than just clothing; it's
            an expression of individuality. Our curated collection of apparel
            combines modern trends with timeless classics, ensuring you find the
            perfect pieces for any occasion. Whether you are looking for casual
            wear, chic office attire, or statement pieces for a night out, we've
            got you covered.
          </p>
          <p>
            Step into Forever today and discover your new favorite outfit.
            Because when you look good, you feel good – and that’s our ultimate
            goal.
          </p>
        </div>
      </div>

      {/*  display relative product */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
