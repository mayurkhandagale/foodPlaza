import { useState } from "react";
import FoodPlazaLogo from "../../Images/FoodPlaza.png";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="w-20 py-2 px-2"
      src={FoodPlazaLogo}
      alt="Food Plaza"
      title="Food Plaza"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex items-center justify-between w-[100vw] h-20 bg-white rounded-md shadow-lg text-black font-bold fixed top-0 left-0 
    overflow-y-hidden z-[999]">
      <Title />
      <div className="flex items-center justify-between mr-8">
        <ul className="flex items-center justify-between">
          <li className="p-3"><Link to='/'><i class="fa-solid fa-house m-2"></i>Home</Link></li>
          <li className="p-3"><Link to='/about'><i class="fa-regular fa-address-card m-2"></i>About</Link></li>
          <li className="p-3"><Link to='/contact'> <i class="fa-regular fa-address-book m-2"></i>Contact</Link></li>
          <li className="p-3">
            <Link to='/cart'>
              <i className="fas fa-shopping-cart mr-2" />{cartItems.length}
            </Link>
          </li>
          <li className="p-3">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="hover:bg-orange-500 rounded cursor-pointer"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="hover:bg-orange-500 rounded cursor-pointer" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
