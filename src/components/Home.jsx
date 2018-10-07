import React from 'react';
import WeatherDisplay from './WeatherDisplay';

const Home = (props) => {
    return (
        <div>
            <div className="col-md-12">
                <WeatherDisplay city={props.city}/>
            </div>
        </div>
    )
};

export default Home;