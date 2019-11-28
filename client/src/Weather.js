import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
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
        console.log(data);
    }

    handleInputChange = (event) => {
        event.preventDefault();
        console.log('typing...')
        this.setState({searchCity : event.target.value})
    }


    render() {
        var weatherInfo = (this.state.weatherJson);
        const {searchCity} = this.state;
        return (
            <div className="App mr-auto ml-auto">
                <div>
                    <h1>Weather</h1>
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
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="city">
                            <Form.Control type="text" placeholder="Search for City" onChange={this.handleInputChange}/>
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