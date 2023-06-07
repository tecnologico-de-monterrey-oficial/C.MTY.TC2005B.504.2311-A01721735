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
      addPam: builder.mutation({
        invalidatesTags: ["Pams"],
        query: (pam) => {
          return {
            method: 'POST',
            url: '/addPam',
            body: {
              name: pam.name,
              last_name: pam.last_name,
              email: pam.email,
              birth_date: pam.birth_date,
              archdiocese: pam.archdiocese,
              deanery_id: pam.deanery_id,
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
              name: pam.name,
              last_name: pam.last_name,
              email: pam.email,
              birth_date: pam.birth_date,
              archdiocese: pam.archdiocese,
              deanery_id: pam.deanery_id,
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
    };
  },
});

export const { useFetchPamsQuery, useFetchPamsGroupsQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation } = pamsApi;
export { pamsApi };