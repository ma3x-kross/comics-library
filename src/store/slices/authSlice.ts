import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthSliceState {
	login: string | null
}

const initialState: AuthSliceState = {
	login: localStorage.getItem('login') || null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<AuthSliceState>) {
			state.login = action.payload.login
			localStorage.setItem('login', action.payload.login as string)
		},
		logout(state) {
			state.login = null
			localStorage.removeItem('login')
		},
	},
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
