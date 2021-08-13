import React from 'react'

import './episode-component.css'
import checkIcon from './../../assets/checkico.png'

const Episode = ({id, name, air_date, episode, markedAsViewed, handleOnClick}) => (
    <div className='episode' onDoubleClick={() => handleOnClick(id)}>
        {
            markedAsViewed && <img className='viewed-image' src={checkIcon} alt="viewed" height='16px' width='16px'/>
        }
        <h2 className='title'> {name} - <span> {episode} </span> </h2>
        <span className='air-date'>launched in {air_date}</span>
    </div>
)


export default Episode
