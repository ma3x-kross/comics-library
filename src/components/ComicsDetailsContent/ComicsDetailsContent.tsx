import React from 'react'

// mui
import { Box, Button, Stack, Tooltip, Typography } from '@mui/material'

// types
import { IComics } from 'types/comics'

// rtk
import { useAuth } from 'hooks/useAuth'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { toggleFavorites } from 'store/slices/favoritesSlice'
import { buyComics } from 'store/slices/purchasesSlice'

interface ComicsDetailsPageContentProps {
	comics: IComics
}

const ComicsDetailsContent: React.FC<ComicsDetailsPageContentProps> = ({
	comics,
}) => {
	// деструктуризация комикса
	const { id, title, description } = comics
	const price =
		comics.prices.find(price => price.type === 'printPrice')?.price || undefined
	const poster = `${comics.thumbnail.path}.${comics.thumbnail.extension}`

	const dispatch = useAppDispatch()

	// список избранных комиксов
	const { list } = useAppSelector(state => state.favorites)

	// комикс уже в избранном? (для текста на кнопке)
	const isExist = list.some(item => item.id === id)

	const handleClickToggleFavorites = () => {
		dispatch(toggleFavorites(comics))
	}

	// список купленных комиксов
	const { purchasesList } = useAppSelector(state => state.purchases)

	// комикс уже куплен? (для текста на кнопке)
	const isExistPurchases = purchasesList.some(item => item.id === id)

	const handleClickBuyComics = () => {
		dispatch(buyComics(comics))
	}

	const { isAuth } = useAuth()

	return (
		<Stack spacing={4} direction={{ xs: 'column', sm: 'row' }} mt={4}>
			<Box>
				{/* Poster */}
				<img
					src={poster}
					alt='title'
					width={300}
					style={{ borderRadius: '8px' }}
				/>
			</Box>
			<Stack spacing={1} maxWidth={500}>
				{/* Title */}
				<Typography
					component='h1'
					color='primary.contrastText'
					fontWeight='600'
					fontSize={{ xs: '24px', sm: '32px' }}
				>
					{title}
				</Typography>
				{/* Description */}
				{description && (
					<Typography
						variant='subtitle2'
						color='primary.contrastText'
						fontWeight='500'
					>
						{description}
					</Typography>
				)}
				{/* Price */}
				<Box>
					{price && (
						<Box
							sx={{
								display: 'flex',
								gap: 1,
								alignItems: 'center',
							}}
						>
							<Typography
								variant='subtitle1'
								color='primary.contrastText'
								fontWeight='600'
							>
								Price:
							</Typography>
							<Typography variant='subtitle1' color='#9e9e9e' fontWeight='600'>
								{price}$
							</Typography>
						</Box>
					)}
				</Box>

				{/* Buttons */}
				<Stack direction='row' spacing={3} alignItems='center'>
					{isAuth ? (
						<>
							{/* Add to Favorites */}
							<Button onClick={handleClickToggleFavorites} color='warning'>
								{isExist ? 'Remove from Favorites' : 'Add to Favorites'}
							</Button>

							{/* Buy */}
							<Button
								onClick={handleClickBuyComics}
								color='success'
								disabled={!price || isExistPurchases}
							>
								{isExistPurchases
									? 'Сomics already been purchased'
									: 'Buy Comics'}
							</Button>
						</>
					) : (
						<Tooltip title='Log in to add  to your favorites'>
							<span>
								<Button disabled color='warning'>
									Add to Favorites
								</Button>
							</span>
						</Tooltip>
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default ComicsDetailsContent
