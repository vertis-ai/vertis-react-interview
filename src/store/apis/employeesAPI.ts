import { createApi } from "@reduxjs/toolkit/query/react";
import {dummyBaseQuery} from "./baseQuery/dummyBaseQuery";

export const employeesAPI = createApi({
    reducerPath: "legacyAPI",
    baseQuery: dummyBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL as string,
    }),
    tagTypes: ["EMPLOYEES"],
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => "getEmployees",
            providesTags: () => ["EMPLOYEES"],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    // @ts-ignore
    useGetEmployeesQuery,
} = employeesAPI;
