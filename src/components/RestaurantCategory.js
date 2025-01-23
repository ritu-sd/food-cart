import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
    
    // const [showItems, setshowItems] = useState(false);

    // const handleClick = () =>{
    //   setshowItems(!showItems);
    // };

    
    const handleClick = () =>{
      setShowIndex();
    };

    return (
        <div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-5">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <span className="font-bold">{data?.title} ({data.itemCards.length})</span>
           <span>🔽</span>
           </div>
           {showItems && <ItemList items={data.itemCards} />}
        </div>
        
        
        
        </div>
    )
}


export default RestaurantCategory;