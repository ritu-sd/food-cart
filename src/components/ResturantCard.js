


const ResturantCard = (props) => {
    
    const { resData } = props;

   const { cloudInaryImgUrl, name, cuisines, avgRating} = resData?.info;
    
    return (
        <div className="resturant-card">
            <img  src={cloudInaryImgUrl} alt="food"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default ResturantCard;