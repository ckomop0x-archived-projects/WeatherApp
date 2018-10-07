import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer/index';
import {PLACES} from '../helpers/places';
import Home from './Home';
import './app.css';

const App = () => {
    return (
        <Router>
            <div className="mainContainer">
                <Header/>
                <div className="container">
                    <div className="col-md-12">
                        <h3>Select a city</h3>
                    </div>
                    <div className="col-md-12">
                        <div>
                            {PLACES.map((place, index) => {
                                return (
                                    <Link key={index} to={`${ place.name }`}>
                                        <button type="button" className="btn btn-light" key={index}>
                                            {place.name}
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <Home city='amsterdam'/>}/>
                        <Route path="/:city" render={({match}) => {
                            const {city} = match.params;

                            return <Home city={city}/>
                        }}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
