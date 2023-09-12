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
    <div>
      <h1>Items in the cart - {cartItems.length}</h1>
      <button className="add-btn" onClick={() => handleClearCart()}> Clear Cart </button></div>
    {cartItems.map(item => <FoodItemCard key={item.id} {...item} />)}
  </div>
}

export default Cart;