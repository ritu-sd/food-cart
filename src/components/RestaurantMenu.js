import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


   const { resId } = useParams();


   const resInfo = useRestaurantMenu(resId);

   const [showIndex,setShowIndex] = useState(null);


    if (resInfo === null) {
        return <Shimmer />;
      }
      console.log(resInfo);

    const { name, cuisines,cloudinaryImageId,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = 
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    if (!itemCards) {
      return <Shimmer />; // Show a loading component until itemCards is available
  }

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      c => c?.card?.card?.["@type"]  ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ||
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
         c => c?.card?.card?.["@type"]  ===
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


   console.log(categories);

    return (
       <div className="text-center">
         <h1 className="font-bold my-5 text-xl">{name}</h1>
         <h3 className="font-bold text-base">{cuisines.join(", ")} - {costForTwoMessage}</h3>

         {categories.map(( category, index) => (
            <RestaurantCategory 
            key={category?.card?.card?.title}  
            data = {category?.card?.card}
            showItems={ index === showIndex ? true : false }
            setShowIndex = {() =>setShowIndex(index === showIndex ? null : index) }
            />
         ))}
       </div>
    );
};

export default RestaurantMenu;