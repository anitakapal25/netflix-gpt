import { useSelector } from "react-redux"
import { MovieList } from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    if(!movies) return 
    //console.log(movies.nowPlayingMovies)
    return (
        movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className="-mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                {/* <MovieList title={"Trending"} movies={movies} />
                
                <MovieList title={"Upcoming Movies"} movies={movies} />
                <MovieList title={"Horror"} movies={movies} /> */}
            </div>
        </div>
        )
    )
}

export default SecondaryContainer