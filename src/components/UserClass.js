import React from "react";
import {Userinfo} from "../utils/MockData";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,

            userinfo : {
                login: "ABC",
                location: "paris",
                avatar_url: ""
            }
        }

        console.log(this.props.name + "child constructor==>")
    }

   async componentDidMount() {
        // in calss base component componentDidMount is use to make api calls (in fucntion compoennt we use useEffect() for api calls)
        // first constructor will call then Render() and then componentDidMount()  method
        const data = await fetch("https://api.github.com/users/priyashelke").then();
        const json = await data.json();
        console.log( "child componentDidMount==>", json);

        this.setState({
            userinfo : json
        })

        // Important- whenevr you set timersetout or interval you should unmount this.
       this.timer = setInterval(()=>{
            console.log("hello interval")
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    

    render() {
        console.log(this.props.name + "child render==>")
        return (
            <div className="user-card">
            <img src={this.state.userinfo.avatar_url}></img>
            <h1>count: {this.state.count}</h1>
            <button type="button" onClick={()=>{
                this.setState({count: this.state.count + 1})
            }}>ClickMe</button>
            <h2>Name: {this.state.userinfo.login}</h2>
            <h2>City: {this.state.userinfo.location}</h2>
        </div>
        )
    }
}

export default UserClass;