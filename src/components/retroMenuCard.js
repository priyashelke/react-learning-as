import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
    const [showIndexMenu, setShowIndexMenu] = useState(0);
    ///optimize code by creating useFetchMenu file called custom hooks


    // useEffect(()=>{
    //     fetchMenu();

    // },[]) 

  //  const [menuCard, setMenuCard] = useState(null);
    const param = useParams();
    const resid = param.resId;
    console.log( resid);

    // const fetchMenu = async() => {
    // const data = await fetch(MENU_URL+ resid).then();
    // const menus =await data.json();
   
    // setMenuCard(menus?.data);
    // }

    const menuCard = useFetchMenu(resid);

    if(menuCard == null) { return <Shimmer/>}


    const {name, cuisines, areaName} = menuCard?.cards[2]?.card.card.info;
    const {lastMileTravelString} =  menuCard?.cards[2]?.card.card.info?.sla;
    console.log('menuCard',menuCard)
    const itemcards =  menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
   
    const filteredMenuList = menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(a => a.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log('filteredMenuList',filteredMenuList)
    console.log('itemcards',itemcards)
   // const menuD = menuCard.cards[2];
    return (
        <><div className="text-center">
            <h1 className="font-extrabold text-2xl my-6">{name}</h1>
            <p>{cuisines.join(', ')}</p>
            {/* <p>{areaName} -  {lastMileTravelString}</p> */}
           {filteredMenuList.map((category, index) => (
            <RestroCategory data = {category.card.card}
            showIndex = {index === showIndexMenu ? true : false}
            setShowIndexMenu = {() => setShowIndexMenu(index)}
            />
           ))}
        {/* <ul>
            {itemcards.itemCards.map(item=><li key= {item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} </li>)}
        </ul> */}
        </div>
        <div> 
           
          {/*   {
                  menuCard.cards.filter(item => {
                    //if(item.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards) {
                   // console.log('====== each item ======', item.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards);
                  
                  //  }
                })
            }
         */}
        <div>
        {console.log('itemcards',itemcards)}
       
        </div>
            
        </div></>
    )
}

export default RestroMenu;