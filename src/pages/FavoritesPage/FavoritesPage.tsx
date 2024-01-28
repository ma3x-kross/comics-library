import React from 'react'

// rtk
import { useAppSelector } from 'hooks/reduxHooks'
// components
import FavoritesAndPurchasesContent from 'components/FavoritesAndPurchasesContent'

const FavoritesPage: React.FC = () => {
	// список избранных комиксов
	const { list } = useAppSelector(state => state.favorites)

	return <FavoritesAndPurchasesContent list={list} />
}

export default FavoritesPage
