import { TYPE } from "./ActionTypes";

export function ListItemClicked(state={},action){

    
    switch(action.type){
        case "userSelected":{
            return state;            
        }
        case TYPE.CLICK_ON_USER_ITEM:{            
            return action.payload;            
        }
        default:{
           return {};
        }
    }

}