import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";


let reducers={
     auth: reducer 
}

export const BaseStore = createStore(
    createReducer(reducers),
    {},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


function reducer(state = {}, action) {
    switch (action.type) {
        default: return { ...state, ...action }
    }
}

export function addReducer(asyncReducer){
    reducers={
        ...reducers,...asyncReducer
    }
    updateReducers();
}

export function createReducer(injectedReducers){
    return combineReducers({
            reducers,...injectedReducers
    });
}
export function updateReducers(){
    return BaseStore.replaceReducer(createReducer({...reducers}))
};
