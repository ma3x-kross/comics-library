import { useAppSelector } from 'hooks/reduxHooks'

export function useAuth() {
	const { login } = useAppSelector(state => state.auth)

	return { isAuth: !!login, login }
}
