import { useContext } from "react";
import ShopCartContext from "../context/ShopCartContext";

const Products = ({ product }) => {
  const { handleAddCart, cartList } = useContext(ShopCartContext);

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[330px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex w-full justify-between mt-2 px-3">
          <h2 className="font-semibold mt-2">Price : ${product?.price}</h2>
          <button
            onClick={() => handleAddCart(product)}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-2"
          >
            {cartList &&
            cartList.length &&
            cartList.findIndex((item) => item.id === product.id) !== -1
              ? "Remove Cart"
              : "Add Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
