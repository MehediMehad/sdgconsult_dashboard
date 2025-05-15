// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const baseApi = createApi({
    reducerPath: 'baseApi', // The key for this API in the Redux store
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend2.fightnetapp.com/api/v1', // http://10.0.20.36:8010/api/v1
        prepareHeaders: (headers) => {
            const token = Cookies.get("accessToken") // Assuming token is stored in the auth slice

            if (token) {
                headers.set('Authorization', `${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["logIn", "allUsers",]
});

// Export hooks for usage in functional components
export default baseApi;
