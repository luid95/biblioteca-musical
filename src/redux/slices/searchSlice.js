import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk para buscar álbumes en la API
export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
          searchTerm
        )}`
      );
      return response.data.album || [];
    } catch (error) {
      return rejectWithValue(error.message || "Error al buscar álbumes");
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
  lastSearchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.results = [];
        state.lastSearchTerm = action.meta.arg;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error desconocido";
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
