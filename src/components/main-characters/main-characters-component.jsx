import React from 'react'

import MainCharacter from './../main-character/main-character-component'

import './main-characters-component.css'

const MainCharacters = ({characters, handleFavorite, handleClick}) => {
    return (
        <div className='card'>
            {
                characters.map(( {id, ...otherProps} ) => (
                    <MainCharacter 
                        key={id} 
                        id={id} 
                        handleFavorite={handleFavorite}
                        handleClick={handleClick}
                        {...otherProps} 
                         />
                ))
            }
        </div>
    )
}

export default MainCharacters
