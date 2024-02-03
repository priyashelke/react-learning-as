import RestroCard from "./RestroCard";
import ResObject from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";

const BodyLayout = ()=> {
    // const [listOFRes , setListOFRes] = useState([
    //     {
    //         "info": {
    //             "id": "507940",
    //             "name": "EatFit",
    //             "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
    //             "locality": "Ghole Road",
    //             "areaName": "Shivajinagar",
    //             "costForTwo": "₹270 for two",
    //             "cuisines": [
    //                 "Chinese",
    //                 "Healthy Food",
    //                 "Tandoor",
    //                 "Pizzas",
    //                 "North Indian",
    //                 "Thalis",
    //                 "Biryani"
    //             ],
    //             "avgRating": 3.8,
    //             "parentId": "76139",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 25,
    //                 "lastMileTravel": 1.2,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.2 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
             
    //         }
           
    //     },
    //     {
    //         "info": {
    //             "id": "7887",
    //             "name": "Priya",
    //             "cloudinaryImageId": "pawz87ibiatpceg5uvpa",
    //             "locality": "MG Road",
    //             "areaName": "Camp",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "South Indian",
    //                 "Beverages"
    //             ],
    //             "avgRating": 4.5,
    //             "veg": true,
    //             "parentId": "161324",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 29,
    //                 "lastMileTravel": 3,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "3.0 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
               
    //         },
           
    //     },
    // ]);
    const [ListOFRes, setListOFRes] = useState([])

    useEffect(()=>{fetchSwigyData();}, []);

    const fetchSwigyData = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5529918&lng=73.9333818&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       .then();
        const items = await data.json();
        console.log(items);
        setListOFRes(items?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 

    // if(ListOFRes.length == 0) {
    //     return <Shimmer />
    // }

    return ListOFRes.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <div className="searchbox">
                <input type="search" name="search" placeholder="search"/>
                <button>search</button>
                </div>
                <button type="button" name="button"
                onClick={()=>{
                     const FilteredIteams = ListOFRes.filter((res) => {return res.info.avgRating > 4});
                     console.log('FilteredIteams', FilteredIteams);
                     setListOFRes(FilteredIteams);
                }}>Show Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                ListOFRes.map(restaurant => <RestroCard key= {restaurant.info.id} resData = {restaurant}/>)
               }
              
            </div>
        </div>
    )
}
export default BodyLayout;