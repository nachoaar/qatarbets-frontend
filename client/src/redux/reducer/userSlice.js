import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from './messageSlice';
import authService from '../actions/userAtions/authServiceActions'
const user = JSON.parse(localStorage.getItem("user"));

export  const registerUser = createAsyncThunk(
  "user/register",
  async ({name, email, pass}, thunkAPI) => {
    try {
      const response = await authService.register(name, email, pass);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  });

  export const login = createAsyncThunk(
    "User/login",
    async ({ email, pass }, thunkAPI) => {
      try {
        const data = await authService.loginUser(email, pass);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const logout = createAsyncThunk("user/logout", async () => {
    await authService.logout();
  });


  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer } = userSlice;
export default reducer;
