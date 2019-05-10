import {CometChat} from "@cometchat-pro/chat";
import { config } from './config';
export function isInitialized(){
    return CometChat.isInitialized();
}
export async function intializeCometChat() {
     await CometChat.init(config.APP_ID);
}
export async function getLoggedinUser(){
   return await CometChat.getLoggedinUser();
}