import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Movies(props) {
    
    const [movieList, setMovieList] = useState([])

    useEffect(async function (){
        let res = await axios.get(`http://localhost:5000/listOfMovies`)
        setMovieList(res.data)
        console.log(res.data)
    }, [])

    function showMovies(){
        return movieList.map( movie => {
         return  ( 
             <div>
                <li>{movie.title}</li>  
                <img src={movie.image}/>  
                <li>{movie.stars}</li>
                <li>{movie.director}</li>
                <li>{movie.showtimes}</li>
                <li>{movie.description}</li>
            </div>
            )
        })
    }

    return (
        <div>
        <h2>Ironhack Cinema</h2>
        <h3>Click on the movie to check the showtimes!</h3>
            {showMovies()}
        </div>
    );
}

export default Movies;