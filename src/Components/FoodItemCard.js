import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const FoodItemCard = ({
  imageId,
  name,
  price
}) => {
  return (
    <div className="w-[240px] rounded-[10px] p-3 m-5 cursor-pointer shadow-2xl hover:scale-105">
      <img className="w-[100%] rounded-[10px]" src={IMG_CDN_URL + imageId} />
      <h3>{name}</h3>
      <h4 className="font-light">Ruppes: {price / 100}</h4>
    </div>
  );
};

export default FoodItemCard;
