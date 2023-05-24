import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";
import { archdioceseApi } from "./apis/archdioceseApi";
import { deaneryApi } from "./apis/deaneryApi";
import { zoneApi } from "./apis/zoneApi";
import {
    pamReducer,
    changePamId,
    changeName,
    changeLastName,
    changeEmail,
    changeBirthDate,
    changeArchdiocese,
    changeDeaneryId,
    changeZoneId,
    changeArchdioceseId,
    changePam,
    resetPamValues,
} from "./slices/pamSlice";


const store = configureStore({
    reducer: {
        pam: pamReducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [archdioceseApi.reducerPath]: archdioceseApi.reducer,
        [deaneryApi.reducerPath]: deaneryApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(pamsApi.middleware)
        .concat(archdioceseApi.middleware)
        .concat(deaneryApi.middleware)
        .concat(zoneApi.middleware);
    },
});

setupListeners(store.dispatch);

export { 
    store,
    changePamId,
    changeName,
    changeLastName,
    changeEmail,
    changeBirthDate,
    changeArchdiocese,
    changeDeaneryId,
    changeZoneId,
    changeArchdioceseId,
    changePam,
    resetPamValues
 }
export { 
    useFetchPamsQuery, 
    useAddPamMutation, 
    useEditPamMutation, 
    useDeletePamMutation 
} from "./apis/pamsApi";
export {
    useFetchArchdiocesesQuery
} from "./apis/archdioceseApi";
export {
    useFetchDeaneriesQuery
} from "./apis/deaneryApi";
export {
    useFetchZonesQuery
} from "./apis/zoneApi";