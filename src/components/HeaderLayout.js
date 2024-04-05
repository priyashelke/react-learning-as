import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { useSelector } from "react-redux";

const HeaderLayout = ()=> {

    const onlineStatus = useOnlineStatus();
    
    const [btnname, setbtnname] = useState("Login");

    const contextData = useContext(UserContext);

    console.log('contextData', contextData.dummyData);

     useEffect(()=>{
        console.log("useEffect");
    },[btnname]) 

  const cartItem =  useSelector((store)=>store.cart.item)

     return (
        <div className="flex justify-between mb-4" style={{backgroundColor : "#B6C4B6"}}> 
            <div className="logo-container ">
                
                <img className="w-20" src={LOGO_URL}/>
            </div>
        
            <div className="flex item-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">🚺{ onlineStatus === true? ' 🟢' : ' 🔴'}</li> 
                    <li className="px-4"><Link to = '/'>Home</Link></li>
                    <li className="px-4"><Link to = '/about'>About Us</Link></li>
                    <li className="px-4"><Link to = '/contact'>Contact Us</Link></li>
                    <li className="px-4"><Link to = '/gorssery'>Grossery</Link></li>
                    <li className="px-4 font-bold text-xl bg-purple-800"><Link to = '/cart'>🛒 - ({cartItem.length} - Items)</Link></li>
                    <li className="px-4">{contextData.loggedInUser}</li>
                    <button onClick={()=>{
                       btnname == "Login" ? setbtnname( "Logout") : setbtnname( "Login");
                        console.log(btnname);
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
}
export default HeaderLayout;