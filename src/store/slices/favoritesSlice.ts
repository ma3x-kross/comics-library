import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IComics } from 'types/comics'

interface FavoritesSliceState {
	list: IComics[]
}

const initialState: FavoritesSliceState = {
	list: JSON.parse(localStorage.getItem('favorites') as string) || [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites(state, action: PayloadAction<IComics>) {
			// Если уже в избранном то находим индекс и удаляем, иначе добавляем в массив
			const isExist = state.list.some(c => c.id === action.payload.id)
			if (isExist) {
				const index = state.list.findIndex(
					item => item.id === action.payload.id
				)
				if (index !== -1) {
					state.list.splice(index, 1)
				}
			} else {
				state.list.push(action.payload)
			}
			localStorage.setItem('favorites', JSON.stringify(state.list))
		},
	},
})

export const { toggleFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
