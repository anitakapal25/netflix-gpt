import { useSelector } from "react-redux"
import { VideoTitle } from "./VideoTitle"
import { VideoBackground } from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    // if there are no movies we don't render this component
    if(!movies) return 

    const mainMovie = movies[0];
    const {original_title,overview,id} = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer

// Note : useSelector() is used to get data from redux store