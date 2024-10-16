import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import useResMenuData from "../Hooks/useResMenuData";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  )
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addToCart(item));
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="mt-24 min-h-[80vh] w-auto">
      <div className="flex h-48 justify-center items-center bg-[rgb(23,23,23)] text-white">
        <img
          className="w-[250px] h-[170px] rounded-[5px]"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="flex flex-col basis-[520px] m-5">
          <h2 className="text-4xl max-w-lg font-light">{restaurant?.name}</h2>
          <p className="whitespace-nowrap text-inherit opacity-[0.7] text-[15px] max-w-lg">{restaurant?.cuisines?.join(", ")}</p>
          <div className="flex mt-4 justify-between items-center text-[12px] font-medium pb-3 text-inherit max-w-[340px]">
            <div className="flex items-center px-2 py-1 gap-1 bg-green-700 rounded-md" style={
              (restaurant?.avgRating) < 4
                ? { backgroundColor: "red" }
                : (restaurant?.avgRating) === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
            }>
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div >|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-[850px]">
          <div className="p-5">
            <h3 className="font-bold" >Recommended</h3>
            <p className="mt-3 leading-snug text-[rgba(40,44,63,0.45) tracking-[-0.3] text-[1 rem]">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {menuItems.map((item) => (
              <div className="flex justify-between max-h-[250px] p-5 border-b-2 border-b-red-300 " key={item?.id}>
                <div className="flex flex-col self-start overflow-hidden">
                  <h3 className="w-[60%] font-bold">{item?.name}</h3>
                  <p className="mt-3 font-semibold leading-5 text-black w-[60%] tracking-[-0.3px] text-sm">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="mt-3 leading-5 text-black w-[60%] tracking-[-0.3px] text-sm">{item?.description}</p>
                </div>
                <div className="flex flex-col justify-center items-end w-52 overflow-hidden">
                  {item?.imageId && (
                    <img
                      className="h-24 w-24 rounded-sm"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="bg-orange-400 text-black py-2 px-6 cursor-pointer outline-none border-orange-500 mt-3 rounded hover:bg-green-700" onClick={() => addFoodItem(item)}> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;