import React from 'react'

import Episodes from '../../components/episodes/episodes-component'

import EpisodesData from './../../data/episodes'

import './episode-component.css'

class Episode extends React.Component{
    constructor(){
        super()

        this.state = {
            episodes: EpisodesData
        }
    }

    handleOnClick = (id) =>{
        this.setState({episodes: this.state.episodes.map(
            episode => 
                episode.id === id 
                ? {...episode, markedAsViewed : !episode.markedAsViewed}
                : {...episode}
            )})
    }

    render(){
        return (
            <div className='episodes'>
                <Episodes episodes={this.state.episodes} handleOnClick={this.handleOnClick}/>
            </div>
        )
    }
}

export default Episode
