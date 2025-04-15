// redux/spaceSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMySpaces = createAsyncThunk(
  "space/fetchMySpaces",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/spaces/mine");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch spaces");
    }
  }
);

const spaceSlice = createSlice({
  name: "space",
  initialState: {
    mySpaces: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMySpaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMySpaces.fulfilled, (state, action) => {
        state.loading = false;
        state.mySpaces = action.payload;
      })
      .addCase(fetchMySpaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default spaceSlice.reducer;
