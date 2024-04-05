import { createContext } from "react";

const UserContext = createContext({
     loggedInUser : "Default User",
     dummyData : "dummy"
});

export default UserContext;