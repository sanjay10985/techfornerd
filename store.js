import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './features/darkModeReducer'

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
})