import React from 'react';
import WeatherDisplay from './WeatherDisplay';

const Home = ({city}) => {
    return (
        <div data-cy="homeComponent">
          <WeatherDisplay city={city}/>
        </div>
    )
};

export default Home;
