import React, { Component } from 'react';

class Weather extends Component {
    //State
    constructor(props) {
        super(props);
        this.state = {
            weatherJson : {}
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
                    <form method="POST" action="/submit-city">
                        <label>
                            City:    
                            <input type="text" name="city"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    <p>Current Temperature: </p>
                    {weatherInfo.temperature}
                    <br></br>
                    <p>Day Low: </p>
                    {weatherInfo.minTemp}
                    <br></br>
                    <p>Day High: </p>
                    {weatherInfo.maxTemp}
                    <br></br>
                    <p>Conditions: </p>
                    {weatherInfo.description}
                </div>
            </div>
        )
    }
}

export default Weather;