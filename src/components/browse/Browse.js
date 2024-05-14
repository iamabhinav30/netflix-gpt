import React from 'react'
import Header from './../header/index';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../mainContainer/MainContainer';
import SecondaryContainer from '../secondaryContainer/SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
    main container
      - VIdeo background
      - VIdeo title
    secondary container
      - Movie list * n
        - many cards * n

  
  */}
    </>
  )
}

export default Browse