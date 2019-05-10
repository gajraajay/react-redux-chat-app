import { CometChat } from '@cometchat-pro/chat';
import React from "react"
import { Form, Button, Container,Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { config } from '../config';

let LoginPage = class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>         
                <Card.Header>CometChat pro</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Form onSubmit={this.props.login}>
                        <Form.Group controlId="uid">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>                      
                        <Button variant="primary" type="submit">
                            Jump In
                        </Button>
                    </Form>                
                </Card.Body>
            </Card>
        )
    }
}

let mapStateToProps=(state,props)=>{
return {
    ...state,...props
}
};
let mapDispatchToProps=(dispatch)=>{
    return {
        login:(e)=>{
            e.preventDefault()
            console.log(e.target.elements.uid.value)
            CometChat.login(e.target.elements.uid.value,config.API_KEY).then(user=>{
                dispatch({
                       type: "Login", user, isLoggedIn: true
                });
            })
            
        }
    }
    
}
 LoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginPage);
 export {LoginPage};