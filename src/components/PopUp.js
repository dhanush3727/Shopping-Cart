import React from "react";
import { useContext } from "react";
import ShopCartContext from "../context/ShopCartContext";

const PopUp = ({ products, closePopup }) => {
  const { handleAddCart, cartList, currency, currencyChange } =
    useContext(ShopCartContext);
  const price = Math.round(products?.price * 83.89 * 100) / 100;
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div>
        <h1
          onClick={closePopup}
          className="absolute top-[30px] right-[30px] text-[red] text-[30px] cursor-pointer"
        >
          X
        </h1>
        <div className="grid place-items-center mt-8">
          <button
            onClick={currencyChange}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-2"
          >
            {currency ? "IND" : "USD"}
          </button>
          <img
            className="h-[200px] mb-4 mt-8"
            src={products?.image}
            alt={products?.title}
          />
          <h1 className="text-gray-700 font-bold text-lg">{products?.title}</h1>
          <p>Category : {products?.category}</p>
          <p className="text-black-700 font-bold text-lg">
            Rating : {products?.rating?.rate}/5
          </p>
          <p className="text-black-700 font-bold text-lg">
            Price : {currency ? `₹${price}` : `$${products?.price}`}
          </p>
          <button
            onClick={() => handleAddCart(products)}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-2 mt-4"
          >
            {cartList &&
            cartList.length &&
            cartList.findIndex((item) => item.id === products.id) !== -1
              ? "Remove Cart"
              : "Add Cart"}
          </button>
          <p className="p-8">{products?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
