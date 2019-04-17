import React from 'react';
import WeatherDisplay from './WeatherDisplay';

const Home = ({city}) => {
    return (
        <div>
          <WeatherDisplay city={city}/>
        </div>
    )
};

export default Home;
