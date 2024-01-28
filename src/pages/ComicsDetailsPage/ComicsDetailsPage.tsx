import React from 'react'

// mui
import { Box } from '@mui/material'

// components
import Loader from 'components/Loader'

// routing
import { useParams } from 'react-router-dom'

// rtk
import { useGetComicsByIdQuery } from 'store/api/api'
import ComicsDetailsPageContent from '../../components/ComicsDetailsContent/ComicsDetailsContent'

const ComicsDetailsPage:React.FC = () => {
	const { id } = useParams()

	const { data, isLoading, error } = useGetComicsByIdQuery(
		parseInt(id as string)
	)

	return (
		<>
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
			) : isLoading ? (
				<div style={{ marginTop: '16px' }}>
					<Loader />
				</div>
			) : data ? (
				<>
					{data.data.results.map(comics => (
						<div key={comics.id}>
							<ComicsDetailsPageContent
								comics={comics}
							/>
						</div>
					))}
				</>
			) : null}
		</>
	)
}

export default ComicsDetailsPage
