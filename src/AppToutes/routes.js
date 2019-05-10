import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CometChat } from '@cometchat-pro/chat';

export class AppRoutes extends React.Component {

    constructor(props) {
        super(props);
        
    }
componentWillMount(){
    CometChat.getLoggedinUser().then(user=>{
        console.log("user from router",user)
    },error=>{
        console.log("this is error from router",error);
    });
}
    render() {
        return (<Router>
            <Route path="/" exact component={() => {
                console.log("/home");                
                return <div>/</div>
            }} />

            <Route path="/about/" component={() => {

                return <div>/home</div>
            }} />

            <Route path="/users/" component={() => {
                return <div>/users</div>
            }} />
        </Router>)
    }
}