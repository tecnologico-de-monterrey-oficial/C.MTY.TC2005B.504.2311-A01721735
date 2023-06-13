import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    setRole: (state, action) => {
      state.user = {
        ...state.user,
        role: action.payload
      };
    },
  },
});

export const { setUser, setLoading, setError, logout, setRole } = authSlice.actions;

export const authReducer = authSlice.reducer;