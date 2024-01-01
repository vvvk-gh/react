import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const [fetchedMenu, setFetchedMenu] = useState(null);
    //extracting from our url once the user links the card at homepage.
    //resId is the props provided by the useParams()
    const { resId } = useParams();

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setFetchedMenu(json.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (fetchedMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = fetchedMenu.cards[0].card.card.info;
    const { itemCards } = fetchedMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (<div>
        <h1>{name}</h1>
        <p>{cuisines.join(',') + '- ' + costForTwoMessage}</p>
        <div className="menu">
            <ul>
                {itemCards.map(itemCard => <li key={itemCard.card.info.id}> {itemCard.card.info.name} - Rs.{itemCard.card.info.price / 100 || itemCard.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    </div >)
};

export default RestaurantMenu;