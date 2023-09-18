import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getUsersApi: builder.query({
            query:()=>'users'
        }),
        getProductsApi: builder.query({
            query:()=>'products'
        })
    })
})
export const {useGetUsersApiQuery,useGetProductsApiQuery}=usersApi