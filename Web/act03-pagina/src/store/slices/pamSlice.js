import { createSlice } from '@reduxjs/toolkit';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        first_name: '',
        last_name: '',
        gender_id: 1,
        role_id: 1,
        phone: '',
        email: '',
        country: 'Mexico',
        state: '',
        city: '',
        address_1: '',
        address_2: '',
        zip_code: '',
        birth_date: '',
        deceased_date: '1000-01-01',
        guardian_id: 0,
        doctor_id: 0,
        belongs_to_archdiocese: 0,
        pam_group_id: 0,
        archdiocese_id: 1,
        zone_id: 1,
        deanery_id: 1,
        church_id: 1
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
        changeRoleId(state, action) {
            state.role_id = action.payload;
        },
        changePhone(state, action) {
            state.phone = action.payload;
        },
        changeEmail(state, action) {
            state.email = action.payload;
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
        changeBirthDate(state, action) {
            state.birth_date = action.payload;
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
        changeBelongsToArchdiocese(state, action) {
            state.belongs_to_archdiocese = action.payload;
        },
        changePamGroupId(state, action) {
            state.pam_group_id = action.payload;
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
        changeChurchId(state, action) {
            state.church_id = action.payload;
        },
        changePam(state, action) {
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.gender_id = action.payload.gender_id;
            state.role_id = action.payload.role_id;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.country = action.payload.country;
            state.state = action.payload.state;
            state.city = action.payload.city;
            state.address_1 = action.payload.address_1;
            state.address_2 = action.payload.address_2;
            state.zip_code = action.payload.zip_code;
            state.birth_date = action.payload.birth_date;
            state.deceased_date = action.payload.deceased_date;
            state.guardian_id = action.payload.guardian_id;
            state.doctor_id = action.payload.doctor_id;
            state.belongs_to_archdiocese = action.payload.belongs_to_archdiocese;
            state.pam_group_id = action.payload.pam_group_id;
            state.archdiocese_id = action.payload.archdiocese_id;
            state.zone_id = action.payload.zone_id;
            state.deanery_id = action.payload.deanery_id; 
            state.church_id = action.payload.church_id;
           
        },
        
        resetPamValues(state, action) {
            state.first_name = '';
            state.last_name = '';
            state.gender_id = 1;
            state.role_id = 1;
            state.phone = '';
            state.email = '';
            state.country = 'Mexico';
            state.state = '';
            state.city = '';
            state.address_1 = '';
            state.address_2 = '';
            state.zip_code = '';
            state.birth_date = '';
            state.deceased_date = '1000-01-01',
            state.guardian_id = 0;
            state.doctor_id = 0;
            state.belongs_to_archdiocese = 0;
            state.pam_group_id = 0;
            state.archdiocese_id = 1;
            state.zone_id = 1;
            state.deanery_id = 1;
            state.church_id = 1;
        }
    }
});

export const { 
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
    changeArchdioceseId,
    changeZoneId,
    changeDeaneryId,
    changeChurchId,
    resetPamValues 
} = pamSlice.actions;
export const pamReducer = pamSlice.reducer;