import { useState,useEffect } from "react";
import { Menu_API } from "../utils/constant";



const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo]  = useState(null);

    
    useEffect(() => {
        fetchMenu();
       }, []);
   
    const fetchMenu = async () => {
           const data = await fetch(Menu_API + resId);
           const json = await data.json();
           setResInfo(json.data);
       };
    
    return resInfo;
}

export default useRestaurantMenu;