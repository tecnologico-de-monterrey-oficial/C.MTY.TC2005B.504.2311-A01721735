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
              birth_date: pam.birth_date
            },
          };
        },
      }),
    };
  },
});

export const { useFetchPamsQuery, useAddPamMutation } = pamsApi;
export { pamsApi };