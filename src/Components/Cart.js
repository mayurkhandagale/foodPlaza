import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return <div style={{ marginTop: '100px' }}>
    <div className="flex items-center justify-between m-4 py-2">
      <h1 className="m-4">Items in the cart - <span className="font-bold">{cartItems.length}</span> </h1>
      <button className="bg-orange-400 text-black py-2 px-6 cursor-pointer outline-none border-orange-500 mt-3 rounded hover:bg-green-700" onClick={() => handleClearCart()}> Clear Cart </button></div>
    <div > {cartItems.map(item => <FoodItemCard key={item.id} {...item} />)}</div>
  </div>
}

export default Cart;