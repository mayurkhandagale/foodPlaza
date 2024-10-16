import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-[240px] rounded-[10px] p-3 m-5 cursor-pointer shadow-2xl hover:scale-105">
      <img className="w-[100%] rounded-[10px]" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5 className="font-light">{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span className="flex justify-between text-center pt-[8px]">
        <h4
          className="font-bold m-3 text-xs px-0 py-1 first:flex rounded-[5px] items-center bg-green-500 p-2 mt-2 text-white"
          style={
            avgRating < 4
              ? { backgroundColor: "red" }
              : avgRating === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star text-xs p-1"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
