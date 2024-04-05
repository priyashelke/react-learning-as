
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

// Lifecycle of class base component
// First Constructor will get called  and then Render and Then componentDidMount method
// componentDidMount is to make api call
// about contructor called then render ===> then UserClass constructor get called then render then componetDidMount and then About componetDidMount

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor==>")
    }

    

    componentDidMount() {
        console.log("parent componentDidMount==>")
    }
    render() {
        console.log("parent render==>")
        return (
            <div>
                <h1>Hello you are on about us page!!!!!!!!</h1>
            <div>
             
          
            <User name = {"Priya"} location = "Pune"/>
            <UserClass name = {"Priya"} location = "Mumbai"/>

            <div> LoggedInUSer : 
                <UserContext.Consumer>
                {(data) => <h1>{data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
             
            </div>
        )

    }
   
}

export default About;