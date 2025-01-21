import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


   const { resId } = useParams();


   const resInfo = useRestaurantMenu(resId);


    if (resInfo === null || resInfo === undefined) {
        return <Shimmer />;
      }
      console.log(resInfo);

    const { name, cuisines,cloudinaryImageId,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];

    console.log(itemCards);

      
    return (
       <div className="menu">
         <h1>{name}</h1>
         <h3>{cuisines.join(", ")}</h3>
         <h2>{costForTwoMessage}</h2>
         <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}> {item.card.info.name} - {"Rs."} {item.card.info.price/100}</li>
            ))}
         </ul>
       </div>
    );
};

export default RestaurantMenu;