import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";
import { archdioceseApi } from "./apis/archdioceseApi";
import { deaneryApi } from "./apis/deaneryApi";
import { zoneApi } from "./apis/zoneApi";
import { groupApi } from "./apis/groupApi";
import {
    changeName, 
    changeLastName, 
    changeGenderId,
    changeEmail, 
    changeBirthDate, 
    changeBelongsToArchdiocese,
    changeRoleId,
    changePhone,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changePamGroupId,
    changePam, 
    resetPamValues,
    pamReducer
} from "./slices/pamSlice";


const store = configureStore({
    reducer: {
        pam: pamReducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [archdioceseApi.reducerPath]: archdioceseApi.reducer,
        [deaneryApi.reducerPath]: deaneryApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(pamsApi.middleware)
        .concat(archdioceseApi.middleware)
        .concat(deaneryApi.middleware)
        .concat(zoneApi.middleware)
        .concat(groupApi.middleware);
    },
});

setupListeners(store.dispatch);

export { 
    store,
    changeName, 
    changeLastName, 
    changeGenderId,
    changeEmail, 
    changeBirthDate, 
    changeBelongsToArchdiocese,
    changeRoleId,
    changePhone,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changePamGroupId,
    changePam, 
    resetPamValues 
}
export { 
    useFetchPamsQuery, 
    useFetchPamsGroupsQuery, 
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
export {
    useFetchGroupArchdiocesesQuery, useFetchGroupDataQuery
} from "./apis/groupApi";