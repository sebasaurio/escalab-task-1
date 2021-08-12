import React from 'react'

import './main-character-component.css'

const MainCharacter = ({id, name, image, isFavorite, showDetail, handleFavorite, handleClick}) => {
    return (
        <div 
            className={`${isFavorite && 'favorite'} ${showDetail && 'detailed'} card-item`}
            onDoubleClick={() => handleFavorite(id)}
            onClick={() =>  handleClick(id)}>

            <img src={image} alt={name}/> 
            <h4>{name}</h4>
        </div>
    )
}

export default MainCharacter
