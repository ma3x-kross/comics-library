import React, { useState } from 'react'

// mui
import { TextField } from '@mui/material'

// other libraries
import debounce from 'lodash.debounce'
import { useLazyGetComicsListQuery } from 'store/api/api'

interface SearchProps {
	searchValue: string
	setSearchValue: (str: string) => void
	updateSearchValue: (str: string) => void
  
}

const Search: React.FC<SearchProps> = ({searchValue, setSearchValue, updateSearchValue}) => {
	
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		updateSearchValue(e.target.value)
	}

	return (
		<TextField
			size='small'
			placeholder='Search...'
			value={searchValue}
			onChange={onChangeInput}
		/>
	)
}

export default Search
