import {useEffect,useState} from 'react';
import'./App.css';
import SearchIcon from './search.svg'

import MovieCard from './MovieCard';

// OMDB API key: 12a9af20


const API_URL = 'http://www.omdbapi.com/?apikey=12a9af20';

const App = () => {
    const[movies,setMovies] = useState([]);
    const[searchValue,setSearchValue] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    // useEffect(() => {
    //     searchMovies('Matrix');
    // }, []);

    return (
        <div className='app'>
            <h1>Moviessssssss</h1>

            <div className='search'>
                <input type='text' 
                value={searchValue}
                onChange={(event)=>{setSearchValue(event.target.value)}}
                placeholder='Search...' 
                />
            
                <img src={SearchIcon} 
                alt='Search' 
                onClick={()=>{searchMovies(searchValue)}}
                />
                
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'><h2>No movies found</h2></div>
                )
            }

            
        </div>
    );
    }

export default App;