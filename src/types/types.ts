export interface IMoviePageState {
    movieData: object
}

export interface IMoviePageAction {
    type: string
    targetMovie: object
}

export interface IPreviewProps {
    movieInfo: IPopularResult
}

export interface IPopularResult {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IRootPopResObj {
    page: number
    results: IPopularResult[]
    total_pages: number
    total_results: number
}

export interface ICarouselProps {
    children: (Array<React.ReactNode>)
}


