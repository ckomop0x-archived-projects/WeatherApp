import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './WeatherDisplay'

const PLACES = [
	{ name: "Amsterdam", zip: "1012NX" },
	{ name: "San Jose", zip: "94088" },
	{ name: "Santa Cruz", zip: "95062" },
	{ name: "Honolulu", zip: "96803" }
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			activePlace: 0,
		};
	}
	render() {
	  const activePlace = this.state.activePlace;
	  return (
      <div className="App">
	      {PLACES.map((place, index) => (
		      <button
			      key={index}
			      onClick={() => {
				      this.setState({ activePlace: index });
			      }}
		      >
			      {place.name}
		      </button>
	      ))}
	      <WeatherDisplay
		      key={activePlace}
		      zip={PLACES[activePlace].zip}
	      />
	      <div>*Because of http source atapi.openweathermap.org you could allow to load resources from unsecure places to let the WeatherApp work.</div>
      </div>
    );
  }
}

export default App;
