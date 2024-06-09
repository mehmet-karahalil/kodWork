import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import favoritesReducer from "./Favorites";

export default configureStore({
    reducer: {
        counter: counterReducer,
        favorites: favoritesReducer,
    },
});