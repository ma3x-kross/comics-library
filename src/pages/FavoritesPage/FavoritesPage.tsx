import React, { useEffect } from 'react'

// rtk
import { useAppSelector } from 'hooks/reduxHooks'
import { useAuth } from 'hooks/useAuth'

// components
import FavoritesAndPurchasesContent from 'components/FavoritesAndPurchasesContent'

// routing
import { useNavigate } from 'react-router-dom'

const FavoritesPage: React.FC = () => {

	// Если не произведен вход в систему то перенаправлять на главную
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (!isAuth) navigate('/')
	}, [isAuth])

	// список избранных комиксов
	const { list } = useAppSelector(state => state.favorites)

	return <FavoritesAndPurchasesContent list={list} />
}

export default FavoritesPage
