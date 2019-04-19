import React, {FunctionComponent} from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Header } from '../../components';
import Footer from '../Footer';
import { PLACES } from '../../helpers/places';
import Home from '../Home';
import './app.css';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="mainContainer">
        <Header title="Weather Around the World"/>
        <div className="container content">
          <h3>Select a city</h3>
          <div>
            {PLACES.map((place, index) => (
                <Link key={index} to={`${place.name}`}>
                  <button type="button" className="btn btn-light" key={index}>
                    {place.name}
                  </button>
                </Link>
              )
            )}
          </div>
          <Switch>
            <Route exact path="/" render={() => <Home city='amsterdam'/>}/>
            <Route path="/:city" render={({match}) => <Home city={match.params.city}/>}/>
          </Switch>
        </div>
        <Footer footerTitle="&copy; 2017-2019 Weather app by Pavel Ckomop0x Klochkov."/>
      </div>
    </Router>
  );
};

export default App;
