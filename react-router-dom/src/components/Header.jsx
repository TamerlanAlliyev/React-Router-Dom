import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='link' to='/Home'>Home</Link>
            <Link className='link' to='/About'>About</Link>
            <Link className='link' to='/Products'>Product</Link>
            <Link className='link' to='/Contact'>Contact</Link>
        </div>
    )
}

export default Header
