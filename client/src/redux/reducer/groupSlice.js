import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name:"group",
  initialState:{
    group: [],
    groupId: [],
    groupName: []
  },
  reducers:{
    getAllGroup: (state, action) => {
      state.group = action.payload
      state.groupName = state.group.map((id) => {return id.name})
    },
    getGroupId: (state, action) => {
      state.groupId = state.group.filter((g) => g.id === action.payload);
    }
  }
});

export const { getAllGroup, getGroupId } = groupSlice.actions;
export default groupSlice.reducer;
