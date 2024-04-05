import { useEffect, useState } from "react";

const User = ({name , location}) => {

    let [count, setCount] = useState(0);
    const [count1] = useState(1);

    useEffect(()=>{
        console.log("useEffect user");

          // Important- whenevr you set timersetout or interval you should unmount this.
          const timer = setInterval(()=>{
            console.log("hello interval")
        }, 1000);

        // return()=>{} is callback function it use to unmount or unsubscribe the methods or variables
        return(()=> {
            clearInterval(timer);
        })
    });
    return (
        <div className="user-card">
        <h1>count: {count}</h1>
        <button type="button" onClick={()=>{
            count = count + 1;
            setCount(count);
            console.log("return user");
        }}>ClickMee</button>
        <h1>count1: {count1}</h1>
        <h2>Name: {name}</h2>
        <h2>City: {location}</h2>
    </div>
    )
}

export default User;