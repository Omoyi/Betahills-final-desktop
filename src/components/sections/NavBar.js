import React from 'react'
import Logo from '../../Logo.svg'
import { Link } from 'react-scroll'
import '../../header.css'

function NavBar() {
    return (
        <div className='header'>
            <nav>
                <Link to='main'><img src={Logo}/></Link>
                <ul className='menu' >
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/process">Process</Link></li>
                    <li><Link to="/solutions">Solutions</Link></li>
                    <li><Link to="/caseStudies">Case studies</Link></li>
                    <li><Link to="/impact">Impact</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar