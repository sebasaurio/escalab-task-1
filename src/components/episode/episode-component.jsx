import React from 'react'

import './episode-component.css'

const Episode = ({name, air_date, episode, handleOnClick}) => {
    return (
        <div className='episode' onClick={(event) => handleOnClick(event)}>
            <h2 className='title'>{name} - <span>{episode}</span></h2>
            <span className='air-date'>launched in {air_date}</span>
        </div>
    )
}

export default Episode
