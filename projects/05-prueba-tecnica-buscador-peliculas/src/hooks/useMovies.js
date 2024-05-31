import responseMovies from '../mocks/withResult.json'
import withoutResult from '../mocks/withoutResult.json'

export function useMovies() {
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    return { movies: mappedMovies }
}
