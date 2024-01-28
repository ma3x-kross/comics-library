import React from 'react'

// components
import Footer from 'components/Footer'
import Header from 'components/Header'

// routing
import { Outlet } from 'react-router-dom'

import { Container } from '@mui/system'

const Layout: React.FC = () => {
	return (
		<div>
			<Header />
			<Container maxWidth='xl' sx={{ minHeight: '80vh' }}>
				<Outlet />
			</Container>
			<Footer />
		</div>
	)
}

export default Layout
