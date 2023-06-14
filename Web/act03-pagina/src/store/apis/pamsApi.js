import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pamsApi = createApi({
  reducerPath: "pams",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchPams: builder.query({
        providesTags: ["Pams"], // Ahorita vemos de que se trata
        query: () => {
          return {
            url: "/getPams",
            params: {},
            method: "GET",
          };
        },
      }),
      fetchPamsGroups: builder.query({
        providesTags: ["Pams"], // Ahorita vemos de que se trata
        query: () => {
          return {
            url: "/getPamsGroups",
            params: {},
            method: "GET",
          };
        },
      }),
      fetchPamByEmail: builder.query({
        providesTags: ["Pams"], // Ahorita vemos de que se trata
        query: (email) => {
          return {
            url: `/getPamByEmail/${email}`,
            params: {},
            method: "GET",
          };
        },
      }),
      addPam: builder.mutation({
        invalidatesTags: ["Pams"],
        query: (pam) => {
          return {
            method: 'POST',
            url: '/addPam',
            body: {
              first_name: pam.first_name,
              last_name: pam.last_name,
              gender_id: pam.gender_id,
              role_id: pam.role_id,
              phone: pam.phone,
              email: pam.email,
              country: pam.country,
              state: pam.state,
              city: pam.city,
              address_1: pam.address_1,
              address_2: pam.address_2,
              zip_code: pam.zip_code,
              birth_date: pam.birth_date,
              deceased_date: pam.deceased_date,
              guardian_id: pam.guardian_id,
              doctor_id: pam.doctor_id,
              belongs_to_archdiocese: pam.belongs_to_archdiocese,
              pam_group_id: pam.pam_group_id,

            },
          };
        },
      }),
      editPam: builder.mutation({
        invalidatesTags: ["Pams"],
        query: (pam) => {
          return {
            method: 'PUT',
            url: `/updatePam/${pam.pam_id}`,
            body: {
              first_name: pam.first_name,
              last_name: pam.last_name,
              gender_id: pam.gender_id,
              role_id: pam.role_id,
              phone: pam.phone,
              email: pam.email,
              country: pam.country,
              state: pam.state,
              city: pam.city,
              address_1: pam.address_1,
              address_2: pam.address_2,
              zip_code: pam.zip_code,
              birth_date: pam.birth_date,
              deceased_date: pam.deceased_date,
              guardian_id: pam.guardian_id,
              doctor_id: pam.doctor_id,
              belongs_to_archdiocese: pam.belongs_to_archdiocese,
              pam_group_id: pam.pam_group_id,
            },
          };
        },
      }),
      deletePam: builder.mutation({
        invalidatesTags: ["Pams"],
        query: (id) => {
          return {
            method: 'DELETE',
            url: `/deletePam/${id}`,
          };
        },
      }),
      addPamByEmail: builder.mutation({
        invalidatesTags: ["Pams"],
        query: (pam) => {
          return {
            method: 'POST',
            url: '/addPamByEmail',
            body: {
              email: pam.email,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchPamsQuery, useFetchPamsGroupsQuery, useFetchPamByEmailQuery,useAddPamMutation, useEditPamMutation, useDeletePamMutation, useAddPamByEmailMutation } = pamsApi;
export { pamsApi };