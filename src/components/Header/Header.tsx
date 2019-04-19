import React, {FunctionComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
  title: string
}

const Header: FunctionComponent<HeaderProps> = ({title}) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header

