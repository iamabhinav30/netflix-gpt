import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-tr from-black'>
    <h1 className='text-5xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div>
        <button 
        className='p-3 bg-white text-black rounded-lg px-12 text-lg text-bold hover:bg-opacity-80 '>
        Play
        </button>
        <button 
        className='mx-2 p-3 bg-white text-white rounded-lg px-12 text-lg bg-opacity-50 hover:bg-opacity-40 '>
        More Info
        </button>
    </div>
    </div>
  )
}

export default VideoTitle