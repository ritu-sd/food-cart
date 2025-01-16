import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";

const RestaurantMenu = () => {

   const [resInfo, setResInfo]  = useState(null);

   const { resId } = useParams();

    useEffect(() => {
     fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
      }
    

    const { name, cuisines,cloudinaryImageId,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

      
    return (
       <div className="menu">
         <h1>{name}</h1>
         <h3>{cuisines.join(", ")}</h3>
         <h2>{costForTwoMessage}</h2>
         <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.name}>{item.card.info.name} - {"Rs."} {item.card.info.price/100}</li>
            ))}
         </ul>
       </div>
    );
};

export default RestaurantMenu;