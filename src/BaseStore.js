import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

function reducer(state={},action){    
    
    switch(action.type){
        default: return {...state,...action}
    }
    
}
export const BaseStore = createStore(reducer, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f
));


