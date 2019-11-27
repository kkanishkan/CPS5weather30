import React, { Component } from 'react';

class Weather extends Component {
    //State
    constructor(props) {
        super(props);
        this.state = {
            weatherJson : []
        }
    }

    // Fetch Weather Json as the page loads
    componentDidMount() {
        this.getWeather();
    }

    getWeather = () => {
        fetch('/api/weather')
        .then(res => res.json())
        .then(weatherJson => this.setState({weatherJson}))
    }

    render() {
        var weatherInfo = (this.state.weatherJson);

        return (
            <div className="App">
                <h1>Weather Result</h1>
                {/* Checking is json is null or not */}
                <div>
                    <p>Current Temperature: </p>
                    {weatherInfo[0]}
                    <br></br>
                    <p>Day Low: </p>
                    {weatherInfo[1]}
                    <br></br>
                    <p>Day High: </p>
                    {weatherInfo[2]}
                    <br></br>
                    <p>Conditions: </p>
                    {weatherInfo[3]}
                </div>
            </div>
        )
    }
}

export default Weather;