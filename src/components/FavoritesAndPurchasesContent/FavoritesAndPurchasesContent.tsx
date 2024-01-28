import React, { useEffect, useState } from 'react'

// mui
import { Box, Grid, Pagination } from '@mui/material'

// components
import ComicsCard from 'components/ComicsCard'
import Search from 'components/Search'

// types
import { IComics } from 'types/comics'

const offset = 4

interface FavoritesAndPurchasesContentProps {
	list: IComics[]
}

const FavoritesAndPurchasesContent: React.FC<
	FavoritesAndPurchasesContentProps
> = ({ list }) => {
	// pagination
	const [page, setPage] = useState(1)
	const handleChangePage = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value)
	}

	// search
	const [searchValue, setSearchValue] = useState('')

	const updateSearchValue = () => {
		setPage(1)
	}
	// comics list
	const [comicsList, setComicsList] = useState(list)

	useEffect(() => {
		let filteredList = list.filter(item =>
			item.title.toLowerCase().startsWith(searchValue.toLowerCase())
		)

		setComicsList(filteredList)
	}, [page, searchValue])
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
			{/* SEARCH */}
			<Search
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				updateSearchValue={updateSearchValue}
			/>

			{list.length > 0 ? (
				<>
					<Grid
						container
						spacing={4}
						columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
						sx={{ justifyContent: 'center', mb: 4 }}
					>
						{comicsList
							.slice((page - 1) * offset, (page - 1) * offset + offset)
							.map(comics => (
								<Grid item key={comics.id} xs={4} lg={3}>
									<ComicsCard
										id={comics.id}
										title={comics.title}
										description={comics.description}
										price={
											comics.prices.find(price => price.type === 'printPrice')
												?.price || undefined
										}
										poster={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
									/>
								</Grid>
							))}
					</Grid>
					{/* Pagination */}

					<Pagination
						count={Math.ceil(comicsList.length / offset)}
						page={page}
						onChange={handleChangePage}
						sx={{ mx: 'auto' }}
					/>
				</>
			) : (
				<Box
					sx={{
						fontWeight: '600',
						fontSize: '20px',
						color: 'primary.contrastText',
					}}
				>
					No Favorites
				</Box>
			)}
		</Box>
	)
}

export default FavoritesAndPurchasesContent
