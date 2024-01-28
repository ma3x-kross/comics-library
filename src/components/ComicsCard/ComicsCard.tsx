import React from 'react'

// mui
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'

// routing
import { useNavigate } from 'react-router-dom'

// types
import { ComicsProps } from 'types/comics'

const ComicsCard: React.FC<ComicsProps> = ({ id, title, price, poster }) => {
	const navigate = useNavigate()
	return (
		<Card
			sx={{
				height: 350,
				bgcolor: '#1F2232',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia component='img' height='190' image={poster} alt={title} />
			<CardContent>
				{/* TITLE */}
				<Typography
					gutterBottom
					component='div'
					sx={{ fontWeight: '900', fontSize: '20px' }}
				>
					{title.length > 20 ? title.slice(0, 20) + '...' : title}
				</Typography>
				{/* PRICE */}
				{price && (
					<Typography gutterBottom component='div' variant='subtitle1'>
						Price: {price}$
					</Typography>
				)}
			</CardContent>
			<CardActions sx={{ mt: 'auto', pb: 2 }}>
				<Button
					size='small'
					variant='contained'
					onClick={() => navigate(`/comics/${id}`)}
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}

export default ComicsCard
