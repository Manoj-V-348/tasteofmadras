import React, {useState} from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "./App.css"
import "./Navbar.css"

function Navbar() {
    const [style, setStyle] = useState(true);

    const styles = style ? {transform: "translateX(-30vh)"} : {transform: "translateX(0)"};

    function toggleStyles(){
        setStyle(prev => !prev);
    }

  return (
    <>
        <header className='navbar--main'>
            <div className="bars hover--effect" onClick={toggleStyles}>
                <Icon icon="la:bars" width="32" height="32" />  
            </div>
            <Link to="/" className='hover--effect colorchange--text--effect'>
                <h1 className='italic'>tasteofmadras</h1>
            </Link>
            <Link>
                <p className='mild--text capital--text hover--effect colorchange--text--effect'>Reservation</p>
            </Link>
        </header>

        <div className="sidebar vertical--flex" style={styles}>
            <div className="cross--container hover--effect" onClick={toggleStyles}>
                <Icon icon="bitcoin-icons:cross-outline" width="32" height="32" className='cross'/>
            </div>
            <Link to="/" className='link--text'>Home</Link>
            <Link to="/" className='link--text'>Today's Special</Link>
            <Link to="/" className='link--text'>About Us</Link>
            <Link to="/" className='link--text'>Contact Us</Link>
        </div>
    </>
  )
}

export default Navbar