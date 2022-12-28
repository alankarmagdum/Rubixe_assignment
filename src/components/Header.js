
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <nav>
            <div className="logo">
                    <h1>Rubixe</h1>
                </div>
                    <ul className='ul-items'>
                        <li className='li-items'>
                        <Link to='/Home' className='orange'>Home</Link>
                        <Link to='/service'>Service</Link>
                        <Link to='/Products'>products</Link>
                        <Link to='/AI_Internship'>AI Internship</Link>        
                        <Link to='/Career'>Career</Link>
                        <Link to='/Blog'>Blog</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Contact'>Contact us</Link>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header
