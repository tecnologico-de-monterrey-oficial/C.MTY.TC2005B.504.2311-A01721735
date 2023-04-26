import { createSlice } from '@reduxjs/toolkit';
import { addPam, editPam } from './pamsSlice';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        name: '',
        last_name: '',
        email: '',
        birth_date: ''
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
        changePam(state, action) {
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.birth_date = action.payload.birth_date;
        }
    },
    extraReducers(builder) {
        builder.addCase(addPam, (state, action) => {
            state.name = '';
            state.last_name = '';
            state.email = '';
            state.birth_date = '';
        });
        builder.addCase(editPam, (state, action) => {
            state.name = '';
            state.last_name = '';
            state.email = '';
            state.birth_date = '';
        });
    }
});

export const { changeName, changeLastName, changeEmail, changeBirthDate, changePam } = pamSlice.actions;
export const pamReducer = pamSlice.reducer;