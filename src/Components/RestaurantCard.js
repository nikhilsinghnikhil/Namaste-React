import { CDN_URL } from "../utils/contant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  // Destructuring of data
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-50 hover:bg-gray-100 ">
      <img
        className=" w-full h-50 object-cover rounded-lg"
        alt="res-logo"
        // CDN_URL hamne utils ke contant.js se export karke yaha dal diya h.
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// Higher order conponent

// input - Restaurant Card => Restaurant catd location
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 z-10 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md shadow-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
