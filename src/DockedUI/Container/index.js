
import React from "react";
import { UserList } from '../../UserList/UsersList';
import { Container } from 'react-bootstrap';


export class DockContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (<div style={style}><UserList /></div>)
    }
}


const style = {
    height:"400px",
    width:"300px",
    maxWidth:"300px",
    maxHeight:"400px"    
}