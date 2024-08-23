import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Order() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"my"} text2={"orders"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
                <div className="">
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2  text-gray-700">
                    <p className="text-lg">
                      {currency} {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">
                    Date : <span className="text-gray-500">25, Jul, 2024</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text:sm md:text-base">Ready to ship</p>
                </div>
                <button className="border px-4 py-2 tex-gray-700">
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
