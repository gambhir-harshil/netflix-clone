import React, {useEffect, useState} from 'react';
import './NavBar.css';
import logo from './logo.png';
import avatar from './avatar.png';

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, [] );

    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <img className='logo'  src={logo} alt="Logo"/>
            <img className='avatar'  src={avatar} alt="avatar"/>
        </div>
    )
}

export default NavBar;
