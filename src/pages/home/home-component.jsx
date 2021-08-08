import React from 'react'

import MainCharacters from '../../components/main-characters/main-characters-component'
import DetailCharacter from '../../components/detail-character/detail-character-component'

import Characters from './../../data/characters'

import './home-component.css'

class Home extends React.Component{
    constructor(){
        super()

        this.state = {
            characters : Characters
        }
    }

    handleFavorite = id => { 
        const character = this.state.characters.find(x=> x.id === id)
        character.isFavorite = !character.isFavorite
        this.setState([...this.state.characters, character])
    }

    handleClick = () => {
        console.log("Mostrar el detalle")
    }

    render(){
        return(
            <div className='home'>
                <MainCharacters characters={this.state.characters} handleFavorite={this.handleFavorite}/>
                <DetailCharacter/>
            </div>
        )}
}
    


export default Home
