import React from 'react'

import Episode from '../episode/episode-component'

import './episodes-component.css'

const Episodes = ({episodes, handleOnClick}) => (
    <div className='episodes-list'>
        <div className='message-viewed'>
            <span>Press double click to set as viewed</span>
        </div>
        {
            episodes.map(( {id, ...otherEpisodeProps} ) => (
                <Episode key={id} id={id} {...otherEpisodeProps} handleOnClick={handleOnClick}/>
            ))
        }
    </div>
)


export default Episodes
