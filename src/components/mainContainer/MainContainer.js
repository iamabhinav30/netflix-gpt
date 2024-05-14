import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from '../videoTitle/VideoTitle';
import VideoBackground from '../videoBackground/VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies ) return;

    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieID={id} />
        </div>
    )
}

export default MainContainer