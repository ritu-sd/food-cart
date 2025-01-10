import ResturantCard from "./ResturantCard";

import restList from "../utils/data";

const Body = () => {
    return (
        <div className="body">
            
            <div className="search">Search</div>
            <div className="resturant-card-container">
              { restList.map((resturant) => (
                <ResturantCard key={resturant.info.id} resData={resturant}/>
                ))}
            </div>

        </div>
    )
}

export default Body;