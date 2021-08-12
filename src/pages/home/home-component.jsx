import React from 'react'

import MainCharacters from '../../components/main-characters/main-characters-component'
import DetailCharacter from '../../components/detail-character/detail-character-component'

import Characters from './../../data/characters'

import './home-component.css'

class Home extends React.Component{
    constructor(){
        super()

        this.state = {
            characters : Characters, 
            showDetail : false,
            character : {}
        }
    }

    handleFavorite = id => { 
        const character = this.state.characters.find(x=> x.id === id)
        character.isFavorite = !character.isFavorite
        this.setState([...this.state.characters, character])
    }

    handleClick = (id) => {
        this.setState({characters: this.state.characters.map((character) =>
            character.id === id 
            ? {...character, showDetail : !character.showDetail} 
            : {...character, showDetail: false}
        ),
        showDetail : true,
        character: this.state.characters.find(x=> x.id === id)})
    }

    

    render(){
        return(
            <div className='home'>
                <MainCharacters characters={this.state.characters} handleFavorite={this.handleFavorite} handleClick={this.handleClick}/>
                {
                    this.state.showDetail 
                    && <DetailCharacter 
                        name={this.state.character.name} 
                        status={this.state.character.status} 
                        gender={this.state.character.gender}
                        species={this.state.character.species}
                        origin={this.state.character.origin}/>
                }
            </div>
        )}
}
    


export default Home
