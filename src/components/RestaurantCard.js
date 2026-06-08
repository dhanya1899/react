import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ restData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restData?.data;
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="card-image" src={CON_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
