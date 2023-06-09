import { createSlice } from '@reduxjs/toolkit';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        first_name: '',
        last_name: '',
        gender_id: 0,
        email: '',
        birth_date: '',
        role_id: 1,
        belongs_to_archdiocese: false,
        phone: '',
        country: 'Mexico',
        state: '',
        city: '',
        address_1: '',
        address_2: '',
        zip_code: 0,
        deceased_date: '',
        guardian_id: 0,
        doctor_id: 0,
        pam_group_id: 0,

    
    },
    reducers: {
        changeName(state, action) {
            state.first_name = action.payload;
        },
        changeLastName(state, action) {
            state.last_name = action.payload;
        },
        changeGenderId(state, action) {
            state.gender_id = action.payload;
        },

        changeEmail(state, action) {
            state.email = action.payload;
        },
        changeRoleId(state, action) {
            state.role_id = action.payload;
        },
        changePhone(state, action) {
            state.phone = action.payload;
        },
        changeCountry(state, action) {
            state.country = action.payload;
        },
        changeState(state, action) {
            state.state = action.payload;
        },
        changeCity(state, action) {
            state.city = action.payload;
        },
        changeAddress1(state, action) {
            state.address_1 = action.payload;
        },
        changeAddress2(state, action) {
            state.address_2 = action.payload;
        },
        changeZipCode(state, action) {
            state.zip_code = action.payload;
        },
        changeDeceasedDate(state, action) {
            state.deceased_date = action.payload;
        },
        changeGuardianId(state, action) {
            state.guardian_id = action.payload;
        },
        changeDoctorId(state, action) {
            state.doctor_id = action.payload;
        },
        changePamGroupId(state, action) {
            state.pam_group_id = action.payload;
        },
        
        changeBirthDate(state, action) {
            state.birth_date = action.payload;
        },
        changeBelongsToArchdiocese(state, action) {
            state.belongs_to_archdiocese = action.payload;
        },
       
        changePam(state, action) {
            state.first_name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.gender_id = action.payload.gender_id;
            state.email = action.payload.email;
            state.birth_date = action.payload.birth_date;
            state.role_id = action.payload.role_id;
            state.belongs_to_archdiocese = action.payload.belongs_to_archdiocese;
            state.phone = action.payload.phone;
            state.country = action.payload.country;
            state.state = action.payload.state;
            state.city = action.payload.city;
            state.address_1 = action.payload.address_1;
            state.address_2 = action.payload.address_2;
            state.zip_code = action.payload.zip_code;
            state.deceased_date = action.payload.deceased_date;
            state.guardian_id = action.payload.guardian_id;
            state.doctor_id = action.payload.doctor_id;
            state.pam_group_id = action.payload.pam_group_id;
            
        },
        
        resetPamValues(state, action) {
            state.first_name = '';
            state.last_name = '';
            state.gender_id = 0;
            state.email = '';
            state.birth_date = '';
            state.role_id = 1;
            state.belongs_to_archdiocese = false;
            state.phone = '';
            state.country = 'Mexico';
            state.state = '';
            state.city = '';
            state.address_1 = '';
            state.address_2 = '';
            state.zip_code = 0;
            state.deceased_date = '';
            state.guardian_id = 0;
            state.doctor_id = 0;
            state.pam_group_id = 0;

        }
    }
});

export const { 
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
} = pamSlice.actions;
export const pamReducer = pamSlice.reducer;