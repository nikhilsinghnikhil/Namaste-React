import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "./RestaurantList";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5728691&lng=77.45728969999999"
    );
    const json = await data.json();
    setResInfo(json);
  };

  if (!resInfo) return <Shimmer />;

  const restaurants =
    resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <div className="bg-gray-50 min-h-screen">
      <RestaurantList restaurants={restaurants} />
      <RestaurantMenuAccordion />
    </div>
  );
};

export default RestaurantMenu;
