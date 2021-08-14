import React from 'react'

import MainCharacter from './../main-character/main-character-component'

import './main-characters-component.css'

const MainCharacters = ({characters, handleFavorite, handleClick}) => (
    <div className='card'>
        {
            characters.map(( {id, ...otherCharacterProps} ) => (
                <MainCharacter 
                    key={id} 
                    id={id} 
                    handleFavorite={handleFavorite}
                    handleClick={handleClick}
                    {...otherCharacterProps} 
                        />
            ))
        }
    </div>
)


export default MainCharacters
