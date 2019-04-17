import React, {Component} from 'react';
import {urlMaker} from '../services/url-maker';
import CityCard from './CityCard'

class WeatherDisplay extends Component {
    constructor (props) {
        super(props);
        this.state = {
            weatherData: null,
            city: this.props.city || 'amsterdam'
        };
    }

    componentDidMount () {
        this.loadWeather(this.props.city);
    }

    loadWeather (city) {
        fetch(urlMaker(city))
            .then(res => res.json())
            .then(json => {
                this.setState({weatherData: json});
            });
    }

    componentWillReceiveProps (newProps) {
        if (newProps.city !== this.state.city) {
            this.setState({city: newProps.city})
            this.loadWeather(newProps.city);
        }
    }

    render () {
        const {weatherData} = this.state;

        if (!weatherData) {
            return (
                <div>Loading<sup>*</sup></div>
            );
        } else {
            return (
                <div>
                    <CityCard weatherData={weatherData}/>
                </div>
            );
        }
    }
}

export default WeatherDisplay;
