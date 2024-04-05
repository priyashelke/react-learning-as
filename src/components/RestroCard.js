import { CDN_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import UserContext from "../utils/userContext";
import { useContext } from "react";

RestroCardStyle =  {
    backgroundColor: "#f0f0f0"
}

paraStyle =  {
    margin: "3px"
}
const RestroCard = (props)=>{
   const {resData} = props;
   const {cloudinaryImageId,name, avgRating, costForTwo} = resData.info;
   const {deliveryTime} = resData.info.sla;
   const cuisines = resData.info.cuisines.slice(0, 3).join(',  ');

    const contextData = useContext(UserContext)
    console.log(contextData);
    return (
       
        <div className="p-4 m-4 w-[250px] rounded-lg" style={RestroCardStyle}> 
      
            <img alt= "res-img" className="rounded-lg" src={
               CDN_URL
                + cloudinaryImageId
}/>
           <h3 className="font-bold py-4 text-lg">{name}</h3>
            <p className="addspace" style={paraStyle}>{cuisines}</p>
            <span style={{display:"flex", justifyContent: "space-between",  margin: "3px"}}>
                 <p>{avgRating} ⭐⭐⭐⭐</p>
                 <p>{costForTwo}</p>
            </span>  
            <p style={paraStyle}>{deliveryTime} minuts</p>
            <p>User: {contextData.loggedInUser}</p>
          {/*   {console.log('redirectToSelectedRestro', redirectToSelectedRestro)} */}
     
        </div>
    
    );
};

export const WithPromotedTag = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-500 text-white ml-4">Promoted</label>
                <RestroCard {...props} />
            </div>
        );
    };
};

export default RestroCard;