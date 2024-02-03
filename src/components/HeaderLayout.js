import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";

const HeaderLayout = ()=> {

    
    const [btnname, setbtnname] = useState("Login");
     useEffect(()=>{
        console.log("useEffect");
    },[btnname]) 

     return (
        <div className="header" style={{backgroundColor : "#B6C4B6"}}> 
            <div className="logo-container ">
                
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items ">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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