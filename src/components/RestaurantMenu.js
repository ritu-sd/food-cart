import { useState,useEffect } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo]  = useState([]);

    useEffect(() => {
     fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=157939"
        );

        const json = await data.json();
        //console.log(json.data);
        setResInfo(json.data);
    };


    
    console.log (resInfo.cards[2]);

      
    return (
       <div className="menu">
         <h1>Restaurant</h1>
         <h3>200 for two</h3>
         <h2></h2>
       </div>
    );
};

export default RestaurantMenu;