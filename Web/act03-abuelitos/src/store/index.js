import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";




const store = configureStore({
    reducer: {
        [pamsApi.reducerPath]: pamsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(pamsApi.middleware);
    },
});

setupListeners(store.dispatch);


export { store }
export { useFetchPamsQuery } from "./apis/pamsApi";