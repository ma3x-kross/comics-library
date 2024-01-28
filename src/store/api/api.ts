import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// types
import {
	IComicsListArgs,
	IComicsResponse,
} from 'types/comics'

//  utils
import { API_PARAMS, BASE_URL } from 'utils/constants/api'

export const comicsApi = createApi({
	reducerPath: 'comicsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getComicsList: builder.query<IComicsResponse, IComicsListArgs>({
			query: arg => {
				const { search, offset } = arg

				return `comics?${API_PARAMS}&${
					search ? 'titleStartsWith=' + search : ''
				}&${offset ? 'offset=' + offset : ''}`
			},
		}),
		getComicsById: builder.query<IComicsResponse, number>({
			query: id => `comics/${id}?${API_PARAMS}`,
		}),
	}),
})

export const {
	useGetComicsListQuery,
	useLazyGetComicsListQuery,
	useGetComicsByIdQuery,
} = comicsApi
