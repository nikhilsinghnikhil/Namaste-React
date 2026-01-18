// custom hooks ka use karke restaurantMenu ke liye api fetching kar rhe h jo single responsibility ko maintain karta h.

import { useEffect, useState } from "react";
import { MENU_API } from "./contant";
const useRestaurantMenu = () => {

    const [resInfo, setRestInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API);
        const json = await data.json();
        setRestInfo(json);
    };
    
    return resInfo;
}

export default useRestaurantMenu;