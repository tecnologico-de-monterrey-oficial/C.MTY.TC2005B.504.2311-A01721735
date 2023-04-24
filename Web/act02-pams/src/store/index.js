import { configureStore } from "@reduxjs/toolkit";

import {
    pamReducer,
    changeName,
    changeLastName,
    changeEmail,
    changeBirthDate
} from "./slices/pamSlice";

import { pamsReducer, addPam, editPam, removePam } from "./slices/pamsSlice";

const store = configureStore({
    reducer: {
        pam: pamReducer,
        pams: pamsReducer
    }
});

export { store, changeName, changeLastName, changeEmail, changeBirthDate, addPam, editPam, removePam };