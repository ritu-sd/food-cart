import { IMG_URL } from "../utils/constant";


const ItemList = ({items}) => {

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                   
                   <div className="w-10/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    
                    <div className="w-2/12">
                      <div className="absolute">
                       <button className=" bg-black text-white mx-4 p-1 rounded-lg"> Add+ </button>
                      </div>
                       { item.card.info.imageId && (<img src={IMG_URL + item.card.info.imageId} className="h-20 w-20"/>) }
                   </div>
                </div>
            ))};
        </div>
    );

};

export default ItemList;