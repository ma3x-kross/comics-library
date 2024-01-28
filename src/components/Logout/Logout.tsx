import React from 'react'

// mui
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

// store
import { useAppDispatch } from 'hooks/reduxHooks'
import { logout } from 'store/slices/authSlice'


const Logout: React.FC = () => {
	const dispatch = useAppDispatch()

	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickLogout = () => {
		dispatch(logout())
	}

	return (
		<>
			<Button
				onClick={handleClickOpen}
				sx={{
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					gap: 1,
					fontWeight: '600',
				}}
			>
				Log out
				<LogoutIcon fontSize='medium' />
			</Button>

			{/* Modal */}
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'Do you really want to log out?'}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Cancel
					</Button>
					<Button onClick={handleClickLogout}>Yes</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default Logout
