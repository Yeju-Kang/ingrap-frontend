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

export const fetchSpaceDetail = createAsyncThunk(
  "space/fetchSpaceDetail",
  async (spaceId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/spaces/${spaceId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch space detail");
    }
  }
);

const spaceSlice = createSlice({
  name: "space",
  initialState: {
    mySpaces: [],
    loading: false,
    error: null,
    currentSpace: {
      id: null,
      name: "",
      furnitures: [],
    },
  },
  reducers: {
    setFurnitureList: (state, action) => {
      state.currentSpace.furnitures = action.payload;
    },
    setSpaceName: (state, action) => {
      state.currentSpace.name = action.payload;
    },
  },
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
      })
      .addCase(fetchSpaceDetail.fulfilled, (state, action) => {
        state.currentSpace = action.payload;
      });
  },
});

export const { setFurnitureList, setSpaceName } = spaceSlice.actions;
export default spaceSlice.reducer;
