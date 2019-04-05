import React from 'react';
import "./footer.css"

const Footer = ({footerTitle}) => {
    return (
        <footer className="footer">
            <div className="container">
              {footerTitle}
            </div>
        </footer>
    )
};


export default Footer;
