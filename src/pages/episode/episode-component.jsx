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

    handleOnClick = (event) =>{
        console.log(event.target)
        console.log("sadsadsadsad")
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
