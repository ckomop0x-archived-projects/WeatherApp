import React, { Component } from 'react';



class WeatherDisplay extends Component {
	render() {
		return (
			<h1>Displaying some Weather! {this.props.zip}</h1>
		);
	}
}

export default WeatherDisplay;