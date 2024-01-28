import React, { useEffect, useState } from 'react'

// rtk
import { useLazyGetComicsListQuery } from 'store/api/api'

// components
import Loader from 'components/Loader'
import ComicsCard from 'components/ComicsCard'

// mui
import { Box, Grid, Pagination } from '@mui/material'
import Search from 'components/Search'

// other libraries
import debounce from 'lodash.debounce'

const ComicsPage = () => {
	// fetch data
	const [fetchComics, { data, error, isFetching }] = useLazyGetComicsListQuery()

	useEffect(() => {
		fetchComics({})
	}, [])

	// search
	const [searchValue, setSearchValue] = useState('')

	const updateSearchValue = React.useCallback(
		debounce((str: string) => {
			fetchComics({ search: str }, true)
		}, 300),
		[]
	)

	// pagination
	const [page, setPage] = useState(1)
	const handleChangePage = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value)
		fetchComics({ search: searchValue, offset: (value - 1) * 20 }, true)
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
			{/* SEARCH */}
			<Search
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				updateSearchValue={updateSearchValue}
			/>
			{error ? (
				<Box
					sx={{
						fontWeight: '600',
						fontSize: '20px',
						textAlign: 'center',
						color: 'primary.contrastText',
					}}
				>
					Oh no, there was an error
				</Box>
			) : isFetching ? (
				<Loader />
			) : data ? (
				<>
					<Grid
						container
						spacing={4}
						columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
						sx={{ justifyContent: 'center', mb: 4 }}
					>
						{data.data.results.map(comics => (
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
						count={Math.ceil(data.data.total / 20)}
						page={page}
						onChange={handleChangePage}
						sx={{ mx: 'auto' }}
					/>
				</>
			) : null}
		</Box>
	)
}

export default ComicsPage
