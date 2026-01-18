const RestaurantList = ({ restaurants }) => {
  return (
    <>
      <h1 className="font-extrabold text-4xl text-center py-10 text-gray-800">
        Top Restaurants
      </h1>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {restaurants?.map((restaurant) => (
          <div
            key={restaurant.info.id}
            className="w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-2xl"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurant.info.cloudinaryImageId
              }
              alt={restaurant.info.name}
            />

            <div className="p-5">
              <h2 className="font-bold text-lg">{restaurant.info.name}</h2>
              <p className="text-green-600">⭐ {restaurant.info.avgRating}</p>
              <p className="text-gray-500 text-sm">
                🍽 {restaurant.info.cuisines.join(", ")}
              </p>
              <p className="font-medium">💰 {restaurant.info.costForTwo}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
