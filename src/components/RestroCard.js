import { CDN_URL } from "../utils/constants";

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
   console.log('props',resData);
   const cuisines = resData.info.cuisines.slice(0, 3).join(',  ');

    return (
       
        <div className="res-card" style={RestroCardStyle}> 
            <img alt= "res-img" className="res-img" src={
               CDN_URL
                + cloudinaryImageId
}/>
           <h3 style={paraStyle}>{name}</h3>
            <p className="addspace" style={paraStyle}>{cuisines}</p>
            <span style={{display:"flex", justifyContent: "space-between",  margin: "3px"}}>
                 <p>{avgRating} ⭐⭐⭐⭐</p>
                 <p>{costForTwo}</p>
            </span>  
            <p style={paraStyle}>{deliveryTime} minuts</p>
       
        </div>
    
    )
}

export default RestroCard;