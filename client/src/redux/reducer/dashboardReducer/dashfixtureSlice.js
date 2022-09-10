import { createSlice } from "@reduxjs/toolkit";

export const fixtureDashSlice = createSlice({
  name: "fixtureDash",
  initialState: {
    fixtureDashboard: [],
    filterFixtureDash: []
  },
  reducers: {
    getDashFixture: (state, action) => {
      const ordenado = action.payload.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      state.fixtureDashboard = ordenado;
      state.filterFixtureDash = ordenado;
    }
  },
});

export const {
  getDashFixture
} = fixtureDashSlice.actions;
export default fixtureDashSlice.reducer;
