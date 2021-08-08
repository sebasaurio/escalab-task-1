import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/logo.svg'

import './header-component.css'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo/>
        </Link>

        <div className='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            
            <Link className='option' to='/episodes'>
                Episodes
            </Link>
        </div>

    </div>
)

export default Header
