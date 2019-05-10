import {CometChat} from '@cometchat-pro/chat';
import React from 'react';
import { ListItem } from './ListItem/ListItem';
import { ListGroup, Card} from "react-bootstrap";

export class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state={};
        let userRequest=new CometChat.UsersRequestBuilder().setLimit(100).build();
        userRequest.fetchNext().then(userList=>{
            console.log(userList);            
          this.setState(state=>{              
              return {...state,userList}
          })
        },error=>{
            console.log("listFetching error",error)
        })
        
    }

componentDidUpdate(){
    console.log("i am getting updated",this.state);
}
    getTheUserList(){

    }

    render(){
        
        if(this.state.userList){            
            return (<Card style={style}><Card.Header>This is card header</Card.Header><Card.Body style={{ width: "100%", padding: 0, nargine: 0 }}><ListGroup>
                { this.state.userList.map(user=>{        
                return <ListItem key={user.uid} {...user}/>
            })}
            </ListGroup></Card.Body></Card>)
            
        }else{
        
            return <div>no users</div>
        }
        
    }
}
const style={
    position: "absolute",
    bottom: "0px",
    right: "0px",
    maxHeight: "100%",
    maxWidth: "100%", 
    overflowY: "auto",
    overflowX: "hidden",
}