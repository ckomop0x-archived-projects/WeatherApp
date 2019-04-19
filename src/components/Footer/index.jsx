import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({footerTitle}) => {
    return (
        <footer className="footer">
            <div className="container">
              {footerTitle}
            </div>
        </footer>
    )
};

Footer.propTypes = {
  footerTitle: PropTypes.string.isRequired
}

export default Footer;
