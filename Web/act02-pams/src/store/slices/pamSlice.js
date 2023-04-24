import { createSlice } from '@reduxjs/toolkit';
import { addPam, editPam } from './pamsSlice';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        name: 'Eduardo',
        last_name: 'Tello',
        email: 'correo@gmail.com',
        birth_date: '2002-06-01'
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

export const { changeName, changeLastName, changeEmail, changeBirthDate } = pamSlice.actions;
export const pamReducer = pamSlice.reducer;