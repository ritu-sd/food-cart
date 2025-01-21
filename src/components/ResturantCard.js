


const ResturantCard = (props) => {
    
    const { resData } = props;

   const { cloudInaryImgUrl, name, cuisines, avgRating} = resData?.info;
    
    return (
        <div className="m-5 bg-pink-50 w-[250px] shadow-lg rounded-md overflow-hidden">
            <img className="w-[250px] h-[250px] object-cover"  src={cloudInaryImgUrl} alt="food"></img>
            <div className="m-2 h-[130px]">
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4 className="leading-6">{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            </div>
        </div>
    )
}

export default ResturantCard;