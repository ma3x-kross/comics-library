import React from 'react'

// mui
import { Box, CircularProgress } from '@mui/material'

const Loader: React.FC = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<CircularProgress size={50} />
		</Box>
	)
}

export default Loader
