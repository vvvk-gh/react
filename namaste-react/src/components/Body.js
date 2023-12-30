import RestuarentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredSearch, setFilteredSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    console.log('Body Rendered');

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4694819&lng=78.3641253&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    //Conditional Rendering
    return listOfRestaurents.length === 0 ? <Shimmer /> : (<div className="body">
        <div className="filter-container">
            <div className="filter">
                <input type="search" className="fliter-box"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }} />
                <button onClick={() => {
                    const FilterBySearchRestaurants = listOfRestaurents.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                    setFilteredSearch(FilterBySearchRestaurants);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const TopRestaurents = filteredSearch.filter(restuarent => restuarent.info.avgRating > 4);
                setFilteredSearch(TopRestaurents);
            }}>Top Restaurents</button>
        </div>
        <div className="res-container">
            {filteredSearch.map((restuarent) => { return (<RestuarentCard key={restuarent.info.id} resDetails={restuarent} />) })}
        </div >
    </div >)
}

export default Body;
