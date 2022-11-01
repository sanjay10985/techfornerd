import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import postCountReducer from "./postCountReducer";

export default combineReducers({
    darkMode: darkModeReducer,
    postCount: postCountReducer,
});