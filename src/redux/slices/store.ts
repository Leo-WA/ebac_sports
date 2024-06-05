import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { produtosApi } from '../api/api';
import cartReducer from '../slices/cartSlice';
import favoritesReducer from '../slices/favoritesSlice';

const store = configureStore({
  reducer: {
    [produtosApi.reducerPath]: produtosApi.reducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware),
});

setupListeners(store.dispatch);

export default store;
