import { useState ,useEffect } from "react";
import {MENU_URL} from '../utils/constants';
const useFetchMenu = (resId) => {
    const [menuCard, setMenuCard] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setMenuCard(json.data);
       
    };
    return menuCard;
}

export default useFetchMenu;