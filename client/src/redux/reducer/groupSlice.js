import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name:"group",
  initialState:{
    group: []
  },
  reducers:{
    getAllGroup: (state, action) => {
      state.group = action.payload
    }
  }
});

export const { getAllGroup } = groupSlice.actions;
export default groupSlice.reducer;
