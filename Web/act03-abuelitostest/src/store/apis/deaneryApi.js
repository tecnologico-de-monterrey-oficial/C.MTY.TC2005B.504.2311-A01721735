import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const deaneryApi = createApi({
  reducerPath: "deaneries",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchDeaneries: builder.query({
        providesTags: ["Deaneries"], 
        query: (id) => {
          return {
            url: `/getDeaneries/${id}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchDeaneriesQuery } = deaneryApi;
export { deaneryApi };