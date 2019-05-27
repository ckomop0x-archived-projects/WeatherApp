import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

interface HeaderProps {
  title: string;

  changeLanguage(arg0: string): void;
}

const Header: FunctionComponent<HeaderProps> = ({ title, changeLanguage }) => (
  <AppBar position="fixed">
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5" color="inherit">
        {title}
      </Typography>
      <div>
        <button onClick={() => changeLanguage('nl')}>nl</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
    </Toolbar>
  </AppBar>
)

export default Header

