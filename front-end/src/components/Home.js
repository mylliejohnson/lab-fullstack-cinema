import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {

    return (
        <div className="Home">
            <h1>This is the Home Page!</h1>
            <button><Link to="/movies">Check out the movies!</Link></button>
        </div>
    );
}

export default Home;