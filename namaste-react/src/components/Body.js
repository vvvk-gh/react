import RestuarentCard from "./RestuarentCard";
import { useState } from "react";


const Body = ({ resList }) => {
    const [listOfRestaurents, setListOfRestaurents] = useState(resList);

    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredRestaurents = listOfRestaurents.filter(restuarent => restuarent.info.avgRating > 4);
                setListOfRestaurents(filteredRestaurents);
            }}>Top Restaurents</button>
        </div>
        <div className="res-container">
            {listOfRestaurents.map((restuarent) => { return (<RestuarentCard key={restuarent.info.id} resDetails={restuarent} />) })}
        </div >
    </div >)
}

export default Body;
