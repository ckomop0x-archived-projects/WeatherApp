// import React from 'react';
// import './header.css';
//
// const Header = () => {
//     return (
//         <header className="header">
//             <div className="container">
//                 <a href="/" title="Weather Around the World" className="logo">
//                     Weather Around the World
//                 </a>
//             </div>
//         </header>
//     )
// };
//
//
// export default Header

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  header: {
    backgroundColor: '#5d81ec'
  }
};

function Header(props) {
  const {classes} = props;

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar>
        <Typography variant="headline" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
