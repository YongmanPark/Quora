import React from 'react';
import './Quora.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar';

function Quora(props) {
    return (
        <div>
        <Navbar/>
        <div className='quora_content'>
            <Sidebar/>
        </div>
        </div>
    );
}

export default Quora;