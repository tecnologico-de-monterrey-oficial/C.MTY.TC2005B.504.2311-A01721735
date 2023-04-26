import { createSlice, nanoid } from "@reduxjs/toolkit";

const pamsSlice = createSlice({
  name: "pams",
  initialState: {
    pams: []
  },
  reducers: {
    addPam(state, action) {
      state.pams.push({
        id: nanoid(),
        name: action.payload.name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        birth_date: action.payload.birth_date,
      });
    },
    editPam(state, action) {
      const index = state.pams.findIndex((pam) => {
        console.log('id: ' + pam.id)
        return pam.id === action.payload.id;
      });
      console.log('Hola Crayola');
      console.log(action.payload);
      console.log(index);
      state.pams[index].name = action.payload.name;
      state.pams[index].last_name = action.payload.last_name;
      state.pams[index].email = action.payload.email;
      state.pams[index].birth_date = action.payload.birth_date;
    },
    removePam(state, action) {
      const index = state.pams.findIndex((pam) => {
        return pam.id === action.payload;
      });
      state.pams.splice(index, 1);
    },
  },
});

export const { addPam, editPam, removePam } = pamsSlice.actions;
export const pamsReducer = pamsSlice.reducer;