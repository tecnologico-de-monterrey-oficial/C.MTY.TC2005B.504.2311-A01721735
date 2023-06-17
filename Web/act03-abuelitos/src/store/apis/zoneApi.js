import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const zoneApi = createApi({
  reducerPath: "zones",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchZones: builder.query({
        providesTags: ["Zones"], 
        query: (id) => {
          return {
            url: `/getZones/${id}`,
            params: {},
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchZonesQuery } = zoneApi;
export { zoneApi };
