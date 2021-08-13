import React from 'react'
import {Link} from 'react-router-dom'

import gitHub from './../../assets/github.png'
import './footer-component.css'

const Footer = () => (
        <footer className='footer'>
            <div className='footer-options'>
                <Link href='#'> 
                    <img src={gitHub} alt="Repositorio" width='16px' height='16px' />
                    Ver repositorio
                </Link>
            </div>
            <p>
            &copy; Sebastian Cardoza Tarea 1 - Escalab
            </p>
        </footer>
    )

export default Footer
