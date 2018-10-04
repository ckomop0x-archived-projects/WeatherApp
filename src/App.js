import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Navbar, Col, Button} from 'react-bootstrap';
import {PLACES} from './helpers/places';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar>
                    <div className="container">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">
                                    Weather Around the World
                                </Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </div>
                </Navbar>
                <div className="container">
                    <Col md={12}>
                        <h3>Select a city</h3>
                    </Col>
                    <Col md={12}>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            {PLACES.map((place, index) => {
                                return (
                                    <Button type="button" className="btn btn-light" key={index}>
                                        <Link key={index} to={`/${ place.name }`}>
                                            {place.name}
                                        </Link>
                                    </Button>

                                )
                            })}
                        </div>
                    </Col>
                    <Switch>
                        <Route exact path="/" render={() => <Home city='amsterdam'/>}/>
                        <Route path="/:city" render={({match}) => {
                            const {city} = match.params;
                            console.log(city);

                            return <Home city={city}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
