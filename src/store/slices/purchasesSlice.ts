import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IComics } from 'types/comics'

interface PurchasesSliceState {
	purchasesList: IComics[]
}

const initialState: PurchasesSliceState = {
	purchasesList: JSON.parse(localStorage.getItem('purchases') as string) || [],
}

export const purchasesSlice = createSlice({
	name: 'purchases',
	initialState,
	reducers: {
		buyComics(state, action: PayloadAction<IComics>) {
			state.purchasesList.push(action.payload)
			localStorage.setItem('purchases', JSON.stringify(state.purchasesList))
		},
	},
})

export const { buyComics } = purchasesSlice.actions

export default purchasesSlice.reducer
