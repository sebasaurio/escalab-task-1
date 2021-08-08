import React from 'react'

import Episode from '../episode/episode-component'

import './episodes-component.css'

const Episodes = ({episodes, handleOnClick}) => {
    return (
        <div className='episodes-list'>
            {
                episodes.map(( {id, ...otherProps} ) => (
                    <Episode key={id} {...otherProps} handleOnClick={onclick}/>
                ))
            }
        </div>
    )
}

export default Episodes
