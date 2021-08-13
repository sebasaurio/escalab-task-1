import React from 'react'

import gitHub from './../../assets/github.png'
import './footer-component.css'

const Footer = () => (
        <footer className='footer'>
           <span>
                &copy; Sebastian Cardoza Tarea 1 - Escalab &nbsp;&nbsp;
                <a href="https://github.com/sebasaurio/escalab-task-1" target="_blank" rel="noopener noreferrer">
                    <img src={gitHub} alt="Repositorio" width='20px' height='20px' />   
                </a>
            </span>
        </footer>
    )

export default Footer
