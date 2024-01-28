import React from 'react'

// routing
import { Navigate, Route, Routes } from 'react-router-dom'

// layout
import Layout from 'components/Layout'

// pages
import ComicsPage from 'pages/ComicsPage'
import LoginPage from 'pages/LoginPage'
import ComicsDetailsPage from 'pages/ComicsDetailsPage'
import FavoritesPage from 'pages/FavoritesPage'
import PurchasesPage from 'pages/PurchasesPage'

const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path='login' element={<LoginPage />} />
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='/comics' />} />
					<Route path='comics' element={<ComicsPage />} />
					<Route path='comics/:id' element={<ComicsDetailsPage />} />
					<Route path='favorites' element={<FavoritesPage />} />
					<Route path='purchases' element={<PurchasesPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
