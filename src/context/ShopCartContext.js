import { createContext, useEffect, useState } from "react";

const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [cartList, setCartList] = useState([]);

  const handleAddCart = (curretnItem) => {
    let copyCart = [...cartList];
    const index = copyCart.findIndex((item) => item.id === curretnItem.id);
    if (index === -1) {
      copyCart.push(curretnItem);
      setCartList(copyCart);
    } else {
      const removeCart = [...cartList];
      removeCart.splice(index, 1);
      setCartList(removeCart);
    }
    console.log(copyCart);
    console.log(index);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        setTimeout(async () => {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          if (data) {
            setProducts(data);
            setLoading(false);
          }
          console.log(data);
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ShopCartContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        handleAddCart,
        cartList,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export default ShopCartContext;
