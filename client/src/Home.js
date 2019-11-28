import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className = "App">
                <h1>Home Page</h1>
                <h2>Kanishkan</h2>
                <Link to={'./Page1'}>
                    <button variant="raised">
                        Page 1
                    </button>
                </Link>
                <Link to={'./Page2'}>
                    <button variant="raised">
                        Page 2
                    </button>
                </Link>
                
                <Link to={'./Weather'}>
                    <button variant="raised">
                        The Weather
                    </button>
                </Link>
            </div>
        )
    }
}

export default Home;