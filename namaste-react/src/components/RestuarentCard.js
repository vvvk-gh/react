import { RES_IMG_CDN } from "../utils/constants";

const RestuarentCard = (props) => {

    const { resDetails } = props;
    const { name, cuisines, avgRating, sla } = resDetails?.info;

    let top3Cusines;
    if (cuisines.length > 3) {
        top3Cusines = cuisines.slice(0, 3).join(',');
    }
    return (
        <div className='res-card'>
            <img src={RES_IMG_CDN + resDetails.info.cloudinaryImageId}
                alt="restaurent logo"
                className='res-logo'
            />
            <div className="res-details">
                <h3>{name}</h3>
                <h5>{(cuisines.length > 3) ? top3Cusines : cuisines.join(',')}</h5>
                <h5>{avgRating} Stars</h5>
                <h5>{sla.deliveryTime} Mins</h5>
            </div>
        </div>)
}

export default RestuarentCard;