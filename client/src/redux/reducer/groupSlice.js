import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name:"group",
  initialState:{
    group: [],
    groupId: []
  },
  reducers:{
    getAllGroup: (state, action) => {
      state.group = action.payload
    },
    getGroupId: (state, action) => {
      state.groupId = state.group.filter((g) => g.id === action.payload);
    }
  }
});

export const { getAllGroup, getGroupId } = groupSlice.actions;
export default groupSlice.reducer;
