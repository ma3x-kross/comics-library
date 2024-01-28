export interface IComics {
	id: number
	title: string
	description: string
	thumbnail: {
		extension: string
		path: string
	}
	prices: {
		type: string
		price: number
	}[]
}

export interface IComicsResponse {
	data: {
		count: number
		limit: number
		offset: number
		total: number
		results: IComics[]
	}
}

export interface IComicsListArgs {
	search?: string
	offset?: number
}

export interface ComicsProps {
	id: number
	title: string
	description: string
	price?: number
	poster: string
}
