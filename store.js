import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './features/darkModeReducer'
import postCountReducer from './features/postCountReducer'

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    postCount: postCountReducer,
  },
})