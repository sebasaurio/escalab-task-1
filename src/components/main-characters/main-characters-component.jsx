import React from 'react'

import MainCharacter from './../main-character/main-character-component'

import './main-characters-component.css'

const MainCharacters = ({characters, handleFavorite}) => {
    return (
        <div className='card'>
            {
                characters.map(( {id, ...otherProps} ) => (
                    <MainCharacter key={id} {...otherProps} id={id} handleFavorite={handleFavorite}/>
                ))
            }
        </div>
    )
}

export default MainCharacters
