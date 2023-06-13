import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";
import { archdioceseApi } from "./apis/archdioceseApi";
import { deaneryApi } from "./apis/deaneryApi";
import { zoneApi } from "./apis/zoneApi";
import { groupApi } from "./apis/groupApi";
import {
    pamReducer,
    changeName, 
    changeLastName, 
    changeGenderId,
    changeRoleId,
    changePhone,
    changeEmail,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changePam, 
    resetPamValues 
} from "./slices/pamSlice";

import {
    setUser,
    setLoading,
    setError,
    logout,
    setRole,
    authReducer
} from "./slices/authSlice";

const store = configureStore({
    reducer: {
        pam: pamReducer,
        auth: authReducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [archdioceseApi.reducerPath]: archdioceseApi.reducer,
        [deaneryApi.reducerPath]: deaneryApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware(
            { serializableCheck: false }
        )
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
    changeRoleId,
    changePhone,
    changeEmail,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changePam, 
    resetPamValues,
    setUser,
    setLoading,
    setError,
    logout
}
export { 
    useFetchPamsQuery, 
    useFetchPamsGroupsQuery, 
    useAddPamMutation, 
    useEditPamMutation, 
    useDeletePamMutation,
    useFetchPamByEmailQuery
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
export {
    signUpWithGoogle
} from "./thunks/authThunk";