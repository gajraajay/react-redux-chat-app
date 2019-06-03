import React from 'react';
import { ListGroup, Col, Image, Row } from 'react-bootstrap';
import { BaseStore, addReducer } from '../../BaseStore';
import { ListItemClicked } from './ListItemClickReducer';
import { connect } from 'react-redux';
import { TYPE } from './ActionTypes';

class ListItem extends React.Component {

    constructor(props) {        
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
        addReducer({ ListItemClicked});
    }
    handleOnClick(user){
        BaseStore.dispatch({type:TYPE.CLICK_ON_USER_ITEM,payload:{selectedItem:user}})
    }
    render() {
        return (
            <ListGroup.Item key={this.props.uid} style={style} onClick={()=>{
            
                this.handleOnClick(this.props);
                
            }}>
                <Row>
                    <Col xs={3}>
                    <div className="profileImage">
                            <div className="statusIndicator">{(this.props.status == "offline" ? <div className='offline'></div> : <div className='online'></div>)}
                            </div>  
                            <div className="profileImageBackGround" style={{ maxWidth: "50px", backgroundImage:"url('"+(this.props.avatar ? this.props.avatar :"https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png")+"')"}}> 
                            </div>
                        </div>
                    </Col>
                    
                    <Col xs={9} className="singleline">
                        {this.props.name}
                        <Row>
                            <Col xs={12} className="singleline">
                            {this.props.uid}                                
                            </Col>
                        </Row>
                    </Col>                    
                    
                </Row>                
            </ListGroup.Item>)
    }
}

ListItem = connect(null, null)(ListItem);
export{ListItem};
const style={
    maxHeight:"75px",
    cursor:"pointer",
}