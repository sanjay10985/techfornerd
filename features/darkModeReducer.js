import { createSlice } from '@reduxjs/toolkit'

export const darkModeReducer = createSlice({
  name: 'darkMode',
  initialState: {
   darkMode : false,
  },
  reducers: {
    Dark_mode: state => {
      state.darkMode = true
    },
    Light_mode: state => {
      state.darkMode = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { Dark_mode, Light_mode} = darkModeReducer.actions

export const selectMode = (state) => state.darkMode.darkMode; 


export default darkModeReducer.reducer