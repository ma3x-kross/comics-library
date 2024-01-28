import React from 'react'

// rtk
import { useAppSelector } from 'hooks/reduxHooks'
// components
import FavoritesAndPurchasesContent from 'components/FavoritesAndPurchasesContent'

const PurchasesPage: React.FC = () => {
	// список избранных комиксов
	const { purchasesList } = useAppSelector(state => state.purchases)

	return <FavoritesAndPurchasesContent list={purchasesList} />
}

export default PurchasesPage
