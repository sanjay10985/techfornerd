import { createSlice } from '@reduxjs/toolkit'

export const postCountReducer = createSlice({
  name: 'post',
  initialState: {
    postCount: 6
  },
  reducers: {
    increasePostCount: state => {
      state.postCount += 6; 
    },
    // Light_mode: state => {
    //   state.darkMode = false
    // },
  }
})

// Action creators are generated for each case reducer function
export const { increasePostCount} = postCountReducer.actions

export const selectMode = (state) => state.post.postCount; 


export default postCountReducer.reducer