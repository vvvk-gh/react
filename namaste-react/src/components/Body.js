import RestuarentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4694819&lng=78.3641253&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    //Conditional Rendering
    return listOfRestaurents.length === 0 ? <Shimmer /> : (<div className="body">
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