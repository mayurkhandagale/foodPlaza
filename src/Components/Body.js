import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useResData from "../Hooks/useResData";
import BannerList from "./BannerList";
import FoodList from "./FoodList";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

//Debounce
const Debounce = function (fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes, isLoading, banners, foods] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      console.log("No matches restaurant found");
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // searchData debounce
  const searchDataDebounce = Debounce(searchData, 300);
  const changeSearchText = function (text) {
    setSearchText(text);
    searchDataDebounce(text, allRestaurants);
  }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="bg-white relative py-8 mt-16">
        <BannerList banners={banners} isLoading={isLoading} />
        <FoodList foods={foods} isLoading={isLoading} />
        <div className="flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-14">
          <input
            type="text"
            className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-full'
            placeholder="Search a restaurant you want..."
            value={searchText}
            // update the state variable searchText when we typing in input box
            //onChange={(e) => setSearchText(e.target.value)}
            onChange={(e) => changeSearchText(e.target.value)}
          ></input>
          <button
            className='bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base'
            onClick={() => {
              // user click on button searchData function is called
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex w-auto flex-wrap items-center justify-center self-stretch">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
