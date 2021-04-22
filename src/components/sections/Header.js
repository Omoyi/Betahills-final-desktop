import React from 'react'
import '../../header.css';
import NavBar from './NavBar'
import HeroSection from './HeroSection'

function Header() {
    return (
        <div className="header">
            <NavBar/>
            <HeroSection/>
        </div> 
    )
}

export default Header
