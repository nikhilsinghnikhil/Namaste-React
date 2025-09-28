import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
              {resObj.restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;