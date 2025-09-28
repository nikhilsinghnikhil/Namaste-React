import { CDN_URL } from "../utils/contant";

const RestaurantCard = (props) => {
    const {resData} = props;
    // Destructuring of data
    const{name , cuisines , avgRating , costForTwo , deliveryTime,cloudinaryImageId} = resData?.info;
        return(
            <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-logo"
                alt="res-logo"
                // CDN_URL hamne utils ke contant.js se export karke yaha dal diya h.
                src={CDN_URL+cloudinaryImageId}></img>
                 <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime}</h4>
            </div>
        );
};

export default RestaurantCard;