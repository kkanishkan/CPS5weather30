import React, { Component } from 'react';
import { Card, Button, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css'

class Weather extends Component {
    //State
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            weatherJson: {},
            searchCity: "Toronto"
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

    // Handle Submit
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const city = {cityName: data.searchCity};
        fetch('/api/weather', {
            method: 'POST',
            body: JSON.stringify(city),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then(res => res.json())
            .then(weatherJson => {
                this.setState({weatherJson});
                console.log(weatherJson);
            })
            .catch(err => console.error(err))
    }

    handleInputChange = (event) => {
        event.preventDefault();
        console.log('typing...')
        this.setState({searchCity : event.target.value})
    }


    render() {
        var weatherInfo = (this.state.weatherJson);
        var imgUrl = "http://openweathermap.org/img/wn/" + weatherInfo.icon + "@2x.png";
        return (
            <div className="App mr-auto ml-auto">
                <h1>Weather</h1>
                <div className="WeatherCard mr-auto ml-auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{weatherInfo.city}</Card.Title>
                        <Card.Text>Current: {Math.round(weatherInfo.temperature)}</Card.Text>
                        <Card.Text>Min: {Math.round(weatherInfo.minTemp)}</Card.Text>
                        <Card.Text>Max: {Math.round(weatherInfo.maxTemp)}</Card.Text>
                        <Card.Text>Conditions: {weatherInfo.description}</Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <Image src={imgUrl} />
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="city">
                            <Form.Control type="text" placeholder="Search for a City" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Weather;