import React from 'react';
import "./footer.css"

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
              {props.footerTitle}
            </div>
        </footer>
    )
};


export default Footer;
