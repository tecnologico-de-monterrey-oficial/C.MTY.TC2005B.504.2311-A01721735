import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";
import {
    pamReducer,
    changeName,
    changeLastName,
    changeEmail,
    changeBirthDate,
    changePam,
    resetPamValues,
} from "./slices/pamSlice";


const store = configureStore({
    reducer: {
        pam: pamReducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pamsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { 
    store,
    changeName,
    changeLastName,
    changeEmail,
    changeBirthDate,
    changePam,
    resetPamValues
 }
export { useFetchPamsQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation } from "./apis/pamsApi";