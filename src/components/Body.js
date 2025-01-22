import ResturantCard,{withPromotedLabel} from "./ResturantCard";

import restList from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
 

    
    const [listOfRes, setListOfRes] = useState([]);

    const [filteredRes, setFilteredRes] = useState([]);

    const [searchTxt, setSearchTxt] = useState([]);

    const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  
  

    const fetchData = async () => {
         const data = await fetch("https://api.jsonbin.io/v3/b/6784dfcde41b4d34e4769c53");

         const json = await data.json();
        
        //Optional Chaining
        setListOfRes(json?.record);
        setFilteredRes(json?.record);
    }

    useEffect(() => {
        fetchData();
    }, []);

//Conditional Rendering
    // if(listOfRes.length === 0){
    //     return <h1> Loading .... </h1>
    // };

   
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return (
        <h1>
            Looks like you are offline!! Please check your internet connection.
        </h1>
        );

    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
         <div className="filter flex items-center justify-center">
            <div className="m-4 p-4">
                <input 
                type="text" 
                className="border border-stone-600 rounded-lg p-0.9" 
                value={searchTxt} 
                onChange={(e) => 
                setSearchTxt(e.target.value)}/>

                <button className="rounded-full bg-gray-800 text-white px-3.5 py-1 ml-1"
                onClick={() => {
                    const filteredRest = listOfRes.filter(
                        (res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()) 
                     );
                 
                     setFilteredRes(filteredRest);

                }}>Search</button>
            </div>
            <div>
            <button className="filter-btn rounded-full bg-gray-800 text-white px-3.5 py-1"
            onClick={ () => {
               const filteredList =  listOfRes.filter(
                  (res) => res.info.avgRating > 4.2
                );

                setListOfRes(filteredList);
            }}>Top Rated Restaurant</button>
            </div>
        </div>          

            <div className="flex flex-wrap">
              { filteredRes.map((resturant) => (
               <Link
               key={resturant.info.id}
               to={"/restaurants/" + resturant.info.id }> 

               {
                resturant.info.promoted ? (
                <ResturantCardPromoted  resData={resturant}/> 
               ) : ( <ResturantCard  resData={resturant}/> 
               )}          
               </Link> 
                ))}
            </div>

        </div>
    )
}

export default Body;