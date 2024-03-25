import { useContext } from "react";
import ShopCartContext from "../context/ShopCartContext";
import { AnimatedCircle } from "react-craftify-spinners";
import Products from "./Products";

const Home = () => {
  const { products, loading } = useContext(ShopCartContext);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <AnimatedCircle color={"rgb(127,29,29)"} />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <Products key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
