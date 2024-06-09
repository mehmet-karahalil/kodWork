import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Favorite = {
  item: any;
};

type FavoritesState = {
  favorites: Favorite[];
};

const initialState: FavoritesState = {
  favorites: [],
};

interface AddFavoritePayload {
  item: any;
}

interface DeleteFavoritePayload {
  id: any;
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<AddFavoritePayload>) {
      state.favorites.push({ item: action.payload.item });
    },
    deleteFavorite(state, action: PayloadAction<DeleteFavoritePayload>) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.item.id !== action.payload.id
      );
    },
    consoleLog(state) {
      console.log(state.favorites);
    },
  },
});

export const { addFavorite, deleteFavorite, consoleLog } = favoritesSlice.actions;
export default favoritesSlice.reducer;
