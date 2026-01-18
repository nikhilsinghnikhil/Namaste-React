// First we think what is input and output of the custom hooks.

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus] = useState(true);
    // check if online
    useEffect(()=>{
        window.addEventListener("offline" , ()=>{
            setOnlineStatus(false);
        });
         window.addEventListener("online" , ()=>{
            setOnlineStatus(true);
        });

    },[])


    // boolean value retun karenge.
    return onlineStatus;
}

export default useOnlineStatus;