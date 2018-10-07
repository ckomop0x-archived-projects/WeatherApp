import React, {Component} from 'react';
import {urlMaker} from '../services/url-maker';

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
            const weather = weatherData.weather[0];
            const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png';

            return (
                <div>
                    <div className="card" style={{width: 400, marginTop: 32}}>
                        {/*<img className="card-img-top" src="https://funtime.kiev.ua/uploads/img/gallery/big/2016/10/uzhgorod-uzhgorod-ukraina-uzhgorodskij-zamok-uzhgorodskaya-oblast-uzhgorod-dostoprimechatelnosti-uzh-57fb1d4ceb34d.jpg"*/}
                             {/*alt={weatherData.name} />*/}
                            <div className="card-body">
                                <h5 className="card-title">{weatherData.name}</h5>
                                <p className="card-text">{weather.main} <img src={iconUrl} alt={weatherData.description}/></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Current: {weatherData.main.temp}°</li>
                                <li className="list-group-item">High: {weatherData.main.temp_max}°</li>
                                <li className="list-group-item">Low: {weatherData.main.temp_min}°</li>
                                <li className="list-group-item">Wind Speed: {weatherData.wind.speed} mi/hr</li>
                            </ul>
                    </div>
                </div>
            );
        }
    }
}

export default WeatherDisplay;
