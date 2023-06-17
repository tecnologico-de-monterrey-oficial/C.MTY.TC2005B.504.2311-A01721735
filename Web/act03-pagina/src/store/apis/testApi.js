import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questionsApi = createApi({
  reducerPath: "tests",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100/api",
  }),
  endpoints(builder) {
    return {
      fetchQuestions: builder.query({
        providesTags: ["Questions"], // Ahorita vemos de que se trata
        query: () => {
          return {
            url: "/getQuestionsGDS",
            params: {},
            method: "GET",
          };
        },
      }),
      fetchQuestionsByTest: builder.query({
        providesTags: ["Questions"], // Ahorita vemos de que se trata
        query: (testID) => {
          return {
            url: `/getQuestions/${testID}`,
            params: {},
            method: "GET",
    };
  },
}),
      fetchQuestionsAns: builder.query({
        providesTags: ["QuestionsAns"], // Ahorita vemos de que se trata
        query: (questionID) => {
          return {
            url: `/getQuestionsAns/${questionID}`,
            params: {},
            method: "GET",
          };
        }

}),
}}});
    


export const { useFetchQuestionsQuery, useFetchQuestionsByTestQuery, useFetchQuestionsAnsQuery } = questionsApi;
export { questionsApi }; 