import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant , setfilteredRestaurant] = useState([]);
  const [searchText , setsearchText] = useState(" ");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
    // optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
      setfilteredRestaurant(restaurants)

      setlistOfRestaurants(restaurants);
  };

  //conditional rendering
//   if(listOfRestaurants.length===0){
//     return <Shimmer/>
     // agar list of restaurants ki length jab tak 0 hai tab tak fake card dikhayega.
//   }

  return listOfRestaurants.length===0 ? <Shimmer/> : (   //using ternary operator.
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
            <button onClick={()=>{
                // Filter the restaurant cards and update the UI
                // searchText 
                if (!searchText.trim()) {
                fetchData(); // dubara API call se original data le aayega
                return;
    }

                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setfilteredRestaurant(filteredRestaurant);

            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
