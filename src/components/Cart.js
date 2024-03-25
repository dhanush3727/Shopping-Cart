import { useContext } from "react";
import ShopCartContext from "../context/ShopCartContext";
import Products from "./Products";

const Cart = () => {
  const { cartList } = useContext(ShopCartContext);
  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-3">
      {cartList && cartList.length ? (
        cartList.map((cartItem) => (
          <Products key={cartItem.id} product={cartItem} />
        ))
      ) : (
        <div className="min-w-[98vw] flex justify-center">
          <p className="font-bold text-[1.5rem]">No Items Added</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
