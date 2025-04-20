import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * 🔄 내 공간 목록 조회 (로그인 사용자)
 */
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

/**
 * 🔍 특정 공간 상세 조회
 */
export const fetchSpaceDetail = createAsyncThunk(
  "space/fetchSpaceDetail",
  async (id) => {
    const res = await axios.get(`/api/spaces/${id}`);
    const data = res.data;

    // 🚡️ 방어 코드 포함
    if (!data || !Array.isArray(data.furnitures)) {
      return { ...data, furnitures: [] };
    }

    return {
      id: data.id,
      name: data.name || "",
      furnitures: data.furnitures.map((f) => ({
        type: f.type,
        modelUrl: f.modelUrl || f.model || null,
        position: [f.positionX ?? 0, f.positionY ?? 0, f.positionZ ?? 0],
        rotation: [f.rotationX ?? 0, f.rotationY ?? 0, f.rotationZ ?? 0],
        color: f.color || "#ffffff",
        uuid: Date.now() + Math.random(),
      })),
    };
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