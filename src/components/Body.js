import ResturantCard from "./ResturantCard";

import restList from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
 
    const [listOfRes, setListOfRes] = useState([]);

  

    const fetchData = async () => {
         const data = await fetch("https://api.jsonbin.io/v3/b/6784dfcde41b4d34e4769c53");

         const json = await data.json();
        
        //Optional Chaining
        setListOfRes(json?.record);
    }

    useEffect(() => {
        fetchData();
    }, []);

//Conditional Rendering
    // if(listOfRes.length === 0){
    //     return <h1> Loading .... </h1>
    // };



    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            
            <button className="filter-btn"
            onClick={ () => {
               const filteredList =  listOfRes.filter(
                  (res) => res.info.avgRating > 4.2
                );

                setListOfRes(filteredList);
            }}>Top Rated Restaurant</button>            

            <div className="resturant-card-container">
              { listOfRes.map((resturant) => (
                <ResturantCard key={resturant.info.id} resData={resturant}/>
                ))}
            </div>

        </div>
    )
}

export default Body;