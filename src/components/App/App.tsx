import React, { FunctionComponent } from 'react'
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { Header } from '../../components'
import Footer from '../Footer'
import { PLACES } from '../../helpers/places'
import Home from '../Home'
import { styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import CssBaseline from '@material-ui/core/CssBaseline'
import { version } from '../../../package.json'
import './app.css'

const ButtonStyled = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 24,
  padding: '0 10px',
})

const NavLinkStyled = styled(NavLink)({
  textDecoration: 'none',
})

const App: FunctionComponent = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className="mainContainer">
          <Header title={t('page.title')} changeLanguage={changeLanguage} />
          <div className="container content">
            <h3>{t('Select a city')}</h3>
            <div>
              {PLACES.map((place, index) => (
                <NavLinkStyled key={index} to={`${place.name}`}>
                  <ButtonStyled key={index}>
                    {/*<button type="button" className="btn btn-light" key={index}>*/}
                    {place.name}
                    {/*</button>*/}
                  </ButtonStyled>
                </NavLinkStyled>
              ))}
            </div>
            <Switch>
              <Route exact path="/" render={() => <Home city="amsterdam" />} />
              <Route path="/:city" render={({ match }) => <Home city={match.params.city} />} />
            </Switch>
          </div>
          <Footer footerTitle={`&copy; 2017-2019 Weather app by Pavel "Ckomop0x" Klochkov. v${version}`} />
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App
