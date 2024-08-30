import { useContext, useState } from "react";
import ShopCartContext from "../context/ShopCartContext";
import PopUp from "./PopUp";

const Products = ({ product }) => {
  const { handleAddCart, cartList } = useContext(ShopCartContext);
  const [popUP, setPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const handlePopUp = (product) => {
    setSelectedProduct(product);
    setPopUp(true);
  };
  const closePopup = () => {
    setPopUp(false);
  };

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[330px] mt-10 ml-5 rounded-xl cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px]">
        <div className="h-[180px]" onClick={() => handlePopUp(product)}>
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
      <div>
        {popUP ? (
          <PopUp products={selectedProduct} closePopup={closePopup} />
        ) : null}
      </div>
    </div>
  );
};

export default Products;
