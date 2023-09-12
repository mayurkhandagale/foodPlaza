import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const FoodItemCard = ({
  imageId,
  name,
  price
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h3>{name}</h3>
      <h4 >Ruppes: {price / 100}</h4>
    </div>
  );
};

export default FoodItemCard;
