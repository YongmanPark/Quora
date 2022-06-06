import React from 'react';
import './Quora.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar';
import Feed from './Feed';

function Quora() {
    return (
        <div>
        <Navbar/>
        <div className='quora_content'>
            <Sidebar/>
            <Feed/>
        </div>
        </div>
    );
}

export default Quora;