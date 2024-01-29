import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen aspect-video pt-[9%] px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold w-1/4'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-justify'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
            <button className='mx-2 bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-70 rounded-lg hover:bg-opacity-90'>More Info</button>
        </div>
    </div>

  )
}

export default VideoTitle