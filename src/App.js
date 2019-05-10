import React from 'react';
import './App.css';
import { Provider, connect } from 'react-redux'
import { BaseStore } from './BaseStore';
import { isInitialized, intializeCometChat, getLoggedinUser } from './CometChatSessionManager';
import { BottomBar } from './DockedUI/BottomBar';

let App = class App extends React.Component {
  constructor(props) {
    super(props);
    if (isInitialized()) {

    } else {
      intializeCometChat().then(() => {

        getLoggedinUser().then(user => {
          console.log(user);
          BaseStore.dispatch({
            type: "Login", user, isLoggedIn: true
          });
        }, error => {
          console.log({ error })
          BaseStore.dispatch({ type: "checkLogin", isLoggedIn: false })
        })
      }, error => {

      });
    }
  }

  componentWillUpdate(props) {
    console.log("yes I ma updated", props);
  }

  componentDidMount() {
    console.log("I am mounted", BaseStore.getState());
  }

  render() {
    return (
      <Provider store={BaseStore}>
        {(this.props.docked ? <BottomBar theme={this.props.theme} /> : <div>non docked</div>)}
      </Provider>
    );
  }
}
export default App;
