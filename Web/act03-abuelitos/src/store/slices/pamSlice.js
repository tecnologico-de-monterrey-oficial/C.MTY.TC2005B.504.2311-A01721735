import { createSlice } from '@reduxjs/toolkit';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        name: '',
        last_name: '',
        email: '',
        birth_date: '',
        archdiocese: false,
        archdiocese_id: 1,
        zone_id: 1,
        deanery_id: 1,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeLastName(state, action) {
            state.last_name = action.payload;
        },
        changeEmail(state, action) {
            state.email = action.payload;
        },
        changeBirthDate(state, action) {
            state.birth_date = action.payload;
        },
        changeArchdiocese(state, action) {
            state.archdiocese = action.payload;
        },
        changeArchdioceseId(state, action) {
            state.archdiocese_id = action.payload;
        },
        changeZoneId(state, action) {
            state.zone_id = action.payload;
        },
        changeDeaneryId(state, action) {
            state.deanery_id = action.payload;
        },
        changePam(state, action) {
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.birth_date = action.payload.birth_date;
            state.archdiocese = action.payload.archdiocese;
            state.archdiocese_id = action.payload.archdiocese_id;
            state.zone_id = action.payload.zone_id;
            state.deanery_id = action.payload.deanery_id;
        },
        resetPamValues(state, action) {
            state.name = '';
            state.last_name = '';
            state.email = '';
            state.birth_date = '';
            state.archdiocese = false;
            state.archdiocese_id = 1;
            state.zone_id = 1;
            state.deanery_id = 1;
        }
    }
});

export const { 
    changeName, 
    changeLastName, 
    changeEmail, 
    changeBirthDate, 
    changeArchdiocese,
    changeArchdioceseId,
    changeZoneId,
    changeDeaneryId,
    changePam, 
    resetPamValues 
} = pamSlice.actions;
export const pamReducer = pamSlice.reducer;