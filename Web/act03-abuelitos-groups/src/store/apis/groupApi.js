import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const groupApi = createApi({
  reducerPath: "groupData",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchGroupArchdioceses: builder.query({
        providesTags: ["Archdioceses"], // Ahorita vemos de que se trata
        query: () => {
          return {
            url: "/getGroupArchdioceses",
            params: {},
            method: "GET",
          };
        },
      }),
      fetchGroupData: builder.query({
        providesTags: ["GroupData"], // Ahorita vemos de que se trata
        query: (id) => {
          return {
            url: `/getGroupData/${id}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchGroupArchdiocesesQuery, useFetchGroupDataQuery } = groupApi;
export { groupApi };
