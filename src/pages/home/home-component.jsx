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

    componentDidMount(){
        setTimeout(()=> {
            const randomId = Math.floor((Math.random()*this.state.characters.length))
            this.setState({characters: this.state.characters.map((character) => 
                character.id === randomId
                ? {...character, isFavorite: true}
                : {...character, isFavorite: false}    
            )})

            this.setState({
                character: this.state.characters.find(character => character.id === randomId),
                showDetail: true
            })
        }, 1000)
    }

    handleFavorite = (id) => { 
        this.setState({characters: this.state.characters.map((character) => 
            character.id === id
            ? {...character, isFavorite: !character.isFavorite}
            : {...character, isFavorite: false}    
        )})

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
                <MainCharacters 
                    characters={this.state.characters} 
                    handleFavorite={this.handleFavorite} 
                    handleClick={this.handleClick}/>
                {
                    this.state.showDetail 
                    && <DetailCharacter 
                        name={this.state.character.name} 
                        status={this.state.character.status} 
                        gender={this.state.character.gender}
                        species={this.state.character.species}
                        created={this.state.character.created}
                        origin={this.state.character.origin}
                        information={this.state.character.information}/>
                }
            </div>
        )}
}
    


export default Home
