import React from 'react'

import './main-character-component.css'

const MainCharacter = ({id, name, image, handleFavorite, isFavorite}) => {
    return (
        <div className={`${isFavorite && 'favorite'} card-item`} onDoubleClick={() => handleFavorite(id)}>
            <img src={image} alt={name}/> 
            <h4>{name}</h4>
        </div>
    )
}

export default MainCharacter
