import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const archdioceseApi = createApi({
  reducerPath: "archdioceses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchArchdioceses: builder.query({
        providesTags: ["Archdioceses"], // Ahorita vemos de que se trata
        query: () => {
          return {
            url: "/getArchdioceses",
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchArchdiocesesQuery } = archdioceseApi;
export { archdioceseApi };