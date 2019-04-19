import React, {FunctionComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const styles = {
//   header: {
//     backgroundColor: '#5d81ec'
//   }
// };

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

