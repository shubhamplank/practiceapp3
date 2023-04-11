import { createStore, combineReducers } from "redux";
import { userReducer, contactsReducer, typingReducer, activeUserReducer, messagesReducer } from "./reducer";
import { state } from "../staticData";

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  typing: typingReducer,
  activeUserId: activeUserReducer,
  messages: messagesReducer,
});
const store = createStore(rootReducer, state);

export default store;
