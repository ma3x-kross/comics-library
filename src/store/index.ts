import { configureStore } from '@reduxjs/toolkit'

// slices
import authReducer from 'store/slices/authSlice'
import favoritesReducer from 'store/slices/favoritesSlice'
import purchasesReducer from 'store/slices/purchasesSlice'

// api
import { comicsApi } from './api/api'

const store = configureStore({
	reducer: {
		auth: authReducer,
		favorites: favoritesReducer,
		purchases: purchasesReducer,
		[comicsApi.reducerPath]: comicsApi.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(comicsApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
