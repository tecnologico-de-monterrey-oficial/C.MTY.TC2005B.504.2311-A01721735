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
    };
  },
});


export const { 
    useFetchPamsQuery, 
  } = pamsApi;
  export { pamsApi };