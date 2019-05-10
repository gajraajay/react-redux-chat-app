import React from 'react';
import './style.css';
import { DockContainer } from '../Container/index';
import { BaseStore } from '../../BaseStore';
import { connect } from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import { LoginPage } from '../../LoginComponent';
import { UserList } from '../../UserList';


class BottomBar extends React.Component{

constructor(props){
    super(props);    
    console.log("bottombar loaded",props);
}

render(){
    return (<div className="cometchat-pro-bottom-bar">
     { (this.props.isLoggedIn?(
            <DockContainer></DockContainer>
        ) : <LoginPage></LoginPage>)}
    </div>)
}

}
let mapStateToProps=(state,props)=>{
    console.log({state,props});
    return {...state,props}
}
let mapDispatchToProps=dispatch=>{
        return {
        onclick:()=>{
            dispatch({type:"clickbar",meta:"this is meta on click"});
        }    
        }
    
}
BottomBar = connect(mapStateToProps,mapDispatchToProps)(BottomBar);
export { BottomBar };