import { Link } from "react-router-dom";
import { useContext } from "react";
import ShopCartContext from "../context/ShopCartContext";

const Navbar = () => {
  const { currencyChange, currency } = useContext(ShopCartContext);
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <div className="ml-5">
          <h1 className="text-red-900  font-bold text-xl sm:text-2xl md:text-3xl">
            <Link to={"/"}>Shopping Cart</Link>
          </h1>
        </div>
        <div>
          <button
            onClick={currencyChange}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-2"
          >
            {currency ? "IND" : "USD"}
          </button>
        </div>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold mr-5">
          <li className="text-[1.3rem]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-[1.3rem]">
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
