import { useEffect, useState } from "react";

const useOnlineStatus = () => {
const [OnlineStatus, setOnlineStatus] = useState(true);
useEffect(()=>{
    checkOnlineStatus();
}, []);

  const  checkOnlineStatus = () => {
        addEventListener("offline", () => {
            setOnlineStatus(false)
        });
        addEventListener("Online", ()=>{
            setOnlineStatus(true);
        })
 }
    return OnlineStatus;
}

export default useOnlineStatus;