import ResturantCard from "./ResturantCard";

import restList from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
 
    const [listOfRes, setListOfRes] = useState([]);

    const [filteredRes, setFilteredRes] = useState([]);

    const [searchTxt, setSearchTxt] = useState([]);

  

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



    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
         <div className="filter">
            <div className="search">
                <input 
                type="text" 
                className="search-box" 
                value={searchTxt} 
                onChange={(e) => 
                setSearchTxt(e.target.value)}/>

                <button className="search-btn"
                onClick={() => {
                    const filteredRest = listOfRes.filter(
                        (res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()) 
                     );
                 
                     setFilteredRes(filteredRest);

                }}>Search</button>
            </div>
            <button className="filter-btn"
            onClick={ () => {
               const filteredList =  listOfRes.filter(
                  (res) => res.info.avgRating > 4.2
                );

                setListOfRes(filteredList);
            }}>Top Rated Restaurant</button>
        </div>          

            <div className="resturant-card-container">
              { filteredRes.map((resturant) => (
               <Link
               key={resturant.info.id}
               to={"/restaurants/" + resturant.info.id }> <ResturantCard  resData={resturant}/> </Link> 
                ))}
            </div>

        </div>
    )
}

export default Body;