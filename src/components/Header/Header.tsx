import React, { useState } from 'react'
import { useAuth } from 'hooks/useAuth'

// mui
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LoginIcon from '@mui/icons-material/Login'

// routing
import { Link, NavLink } from 'react-router-dom'
import Logout from 'components/Logout'

const pages = ['comics', 'favorites', 'purchases']

const navLinkActiveStyle = {
	textDecoration: 'none',
	color: 'inherit',
	textShadow: '0 0 5px #fff, 0 0 50px #F00',
}

const Header: React.FC = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false)

	const { isAuth } = useAuth()

	return (
		<AppBar component='nav' position='static' sx={{ bgcolor: 'primary.dark' }}>
			<Container maxWidth='xl'>
				<Toolbar>
					{/* LOGO */}
					<Typography
						variant='h6'
						component='div'
						fontWeight='600'
						sx={{ flexGrow: 1 }}
					>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
							MARVEL
						</Link>
					</Typography>

					{/* PAGES */}
					<Box
						sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}
					>
						{pages.map(page => (
							<Button
								key={page}
								sx={{
									color: 'white',
									display: 'block',
									fontWeight: '600',
								}}
							>
								<NavLink
									to={page}
									style={({ isActive }) =>
										isActive
											? navLinkActiveStyle
											: { textDecoration: 'none', color: 'inherit' }
									}
								>
									{page}
								</NavLink>
							</Button>
						))}
						{isAuth ? (
							<Logout />
						) : (
							<Button
								sx={{
									color: 'white',
									fontWeight: '600',
								}}
							>
								<Link
									to='/login'
									style={{
										textDecoration: 'none',
										color: 'inherit',
										display: 'flex',
										alignItems: 'center',
										gap: 1,
									}}
								>
									Log in
									<LoginIcon fontSize='medium' />
								</Link>
							</Button>
						)}
					</Box>

					{/* MOBILE MENU */}
					<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
						<IconButton
							onClick={() => setOpenMobileMenu(true)}
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							anchor='right'
							open={openMobileMenu}
							onClose={() => setOpenMobileMenu(false)}
							sx={{ display: { sm: 'none' } }}
						>
							<Box
								sx={{
									display: 'flex',
									direction: 'column',
									bgcolor: 'primary.dark',
									height: '100%',
								}}
							>
								<List sx={{ display: 'flex-col', pl: '1rem', pr: '2rem' }}>
									{pages.map(page => (
										<ListItem key={page} disablePadding>
											<Button
												sx={{
													color: 'white',
													display: 'block',
													fontWeight: '600',
												}}
											>
												<NavLink
													to={page}
													style={({ isActive }) =>
														isActive
															? navLinkActiveStyle
															: { textDecoration: 'none', color: 'inherit' }
													}
												>
													{page}
												</NavLink>
											</Button>
										</ListItem>
									))}
									{isAuth ? (
										<Logout />
									) : (
										<Button
											sx={{
												color: 'white',
												fontWeight: '600',
											}}
										>
											<Link
												to='/login'
												style={{
													textDecoration: 'none',
													color: 'inherit',
													display: 'flex',
													alignItems: 'center',
													gap: 1,
												}}
											>
												Log in
												<LoginIcon fontSize='medium' />
											</Link>
										</Button>
									)}
								</List>
							</Box>
						</Drawer>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
