import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {Book} from "./interfaces";

const GOOGLE_BOOKS_API_KEY = 'YOUR_API_KEY';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1/',
    }),
    endpoints: (builder) => ({
        getSearchedBooks: builder.query<Book[], string>({
            query: (query) => `volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`,
        }),
    }),
})

