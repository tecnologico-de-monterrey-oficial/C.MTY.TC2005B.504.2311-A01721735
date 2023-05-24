import { createSlice } from '@reduxjs/toolkit';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        pam_id: 0,
        name: '',
        last_name: '',
        email: '',
        birth_date: '',
        archdiocese: false,
        deanery_id: 1,
        zone_id: 1,
        archdiocese_id: 1
    },
    reducers: {
        changePamId(state, action) {
            state.pam_id = action.payload;
        },
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
        changeDeaneryId(state, action) {
            state.deanery_id = action.payload;
        },
        changeZoneId(state, action) {
            state.zone_id = action.payload;
        },
        changeArchdioceseId(state, action) {
            state.archdiocese_id = action.payload;
        },
        changePam(state, action) {
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.birth_date = action.payload.birth_date;
            state.archdiocese = action.payload.archdiocese;
            state.deanery_id = action.payload.deanery_id;
            state.zone_id = action.payload.zone_id;
            state.archdiocese_id = action.payload.archdiocese_id;
        },
        resetPamValues(state, action) {
            state.pam_id = 0;
            state.name = '';
            state.last_name = '';
            state.email = '';
            state.birth_date = '';
            state.archdiocese = false;
            state.deanery_id = 1;
            state.zone_id = 1;
            state.archdiocese_id = 1;
        }
    }
});

export const { 
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
} = pamSlice.actions;
export const pamReducer = pamSlice.reducer;