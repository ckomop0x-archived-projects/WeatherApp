import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/" title="Weather Around the World" className="logo">
                    Weather Around the World
                </a>
            </div>
        </header>
    )
};


export default Header