import { gql, useLazyQuery } from "@apollo/client"
import { useState, FC } from "react"

type Movie = {
    id: number
    name: String
    releaseYear: number
    isInTheaters: boolean
}

const QUERY_ALL_USER = gql`
    query SearchMovieQuery($name: String!) {
        movie(name: $name) {
            id
            name
            releaseYear
            isInTheaters
        }
    }
`
const MovieDiv: FC<{ movie?: Movie }> = ({ movie }) => {
    if (movie) {
        return (
            <p>
                {movie.id}
                <br /> {movie.name} | {movie.releaseYear}
            </p>
        )
    }
    return <div></div>
}

function MovieSearch() {
    const [movieName, setMovieName] = useState("Black Widow")
    const [FetchMovie, { data, loading, error }] = useLazyQuery(QUERY_ALL_USER)
    console.log(data)
    return (
        <div className="UsersListBox">
            <h2>Movie Search</h2>
            <input
                type="text"
                id=""
                onChange={(event) => {
                    setMovieName(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    FetchMovie({
                        variables: {
                            name: movieName,
                        },
                    })
                }}
            >
                Search
            </button>
            {loading || error ? (
                <div>
                    {loading}
                    {error?.message}
                </div>
            ) : (
                <MovieDiv movie={data?.movie ?? null} />
            )}
        </div>
    )
}

export default MovieSearch
