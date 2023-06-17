import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ApiCharacters, ICharacter} from "./interfaces";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/',
    }),
    endpoints: (builder) => ({
        getAllCharacters: builder.query<ApiCharacters, void>({
            query: () => `/character`,
        }),
        getSingleCharacter: builder.query<ICharacter, number>({
            query: (id) => `/character/${id}`,
        }),

    }),
})

export const {useGetAllCharactersQuery, useLazyGetSingleCharacterQuery} = api

