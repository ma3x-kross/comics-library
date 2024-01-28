import React, { useEffect, useState } from 'react'

// mui
import {
	Box,
	Button,
	Container,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Paper,
	TextField,
	Typography,
} from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material'

// routing
import { useNavigate } from 'react-router-dom'

// store
import { login } from 'store/slices/authSlice'
import { useAppDispatch } from 'hooks/reduxHooks'
import { useAuth } from 'hooks/useAuth'

const LoginPage: React.FC = () => {
	const [fields, setFields] = useState({ login: '', password: '' })

	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const { isAuth } = useAuth()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [])

	const handleClick = () => {
		if (
			fields.login === import.meta.env.VITE_LOGIN &&
			fields.password === import.meta.env.VITE_PASSWORD
		) {
			dispatch(login(fields))
			navigate('/')
			return
		}

		alert('wrong pass')
	}

	const [showPassword, setShowPassword] = useState(false)

	return (
		<Container
			maxWidth='xs'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<Paper
				elevation={2}
				sx={{ padding: 5, borderRadius: '16px', bgcolor: '#11181C' }}
			>
				<Box>
					<Typography
						component='h1'
						variant='h4'
						mb='32px'
						fontWeight='600'
						textAlign='center'
					>
						Log in
					</Typography>

					<TextField
						type='email'
						label='Enter email'
						placeholder='example@mail.ru'
						variant='outlined'
						fullWidth
						size='small'
						sx={{ mb: '20px' }}
						value={fields.login}
						onChange={e => setFields({ ...fields, login: e.target.value })}
					/>

					<FormControl fullWidth size='small' sx={{ mb: '32px' }}>
						<InputLabel htmlFor='outlined-adornment-password'>
							Enter the password
						</InputLabel>
						<OutlinedInput
							id='outlined-adornment-password'
							type={showPassword ? 'text' : 'password'}
							placeholder='Password'
							label='Enter the password'
							value={fields.password}
							onChange={e => setFields({ ...fields, password: e.target.value })}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => setShowPassword(show => !show)}
										edge='end'
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						></OutlinedInput>
					</FormControl>

					<Button
						fullWidth
						variant='contained'
						sx={{ fontWeight: '900', fontSize: '18px' }}
						onClick={handleClick}
					>
						Log in
					</Button>
				</Box>
			</Paper>
		</Container>
	)
}

export default LoginPage
