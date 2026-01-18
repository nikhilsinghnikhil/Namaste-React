import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const CartItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };
  if (!items.length) {
    return (
      <div>
        <h2 className="mt-6 ">Cart is empty 🛒 , Please add some products</h2>
        <button className="m-2 p-2 bg-blue-300 border rounded-lg cursor-pointer mt-4">
          <Link to="/menu">Add Items</Link>
        </button>
        <img
          src="https://img.freepik.com/premium-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?semt=ais_hybrid&w=740&q=80"
          className="w-80 m-auto"
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 bg-white rounded-xl shadow"
        >
          <div className="text-left">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            <p className="font-bold mt-1">₹{item.price}</p>
          </div>

          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-lg object-cover"
          />
        </div>
      ))}
      <button
        onClick={handleclearCart}
        className="cursor-pointer bg-black border p-2 m-2 text-white rounded-lg"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartItemList;
