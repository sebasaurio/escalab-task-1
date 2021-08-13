import React from 'react'
import favorite from './../../assets/favorite.png'

import './main-character-component.css'

const MainCharacter = ({id, name, image, isFavorite, showDetail, handleFavorite, handleClick}) => {
    return (
        <div 
            className={`${showDetail && 'detailed'} card-item`}
            onDoubleClick={() => handleFavorite(id)}
            onClick={() =>  handleClick(id)}>
                {
                    isFavorite && <img className='is-favorite' src={favorite} alt='is favorite' height='42px' width='40px'></img>
                }


            <img src={image} alt={name}/> 
            <h4>{name}</h4>
        </div>
    )
}

export default MainCharacter
