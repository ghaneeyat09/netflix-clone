import React, {useState, useEffect} from 'react';
import axios from '../axios';

const Row = ({fetchUrl, movieCategory}) => {
    const [movies, setMovies] = useState([])
    const fetchCategories = async () => {
        const request = await axios.get(fetchUrl)
        const result = request.data.results;
        setMovies(result)
    }
    useEffect(() => {
       fetchCategories()
    }, [])
    useEffect(() => {
    //    console.log(movies)
    }, [movies])
  return (
    <div className='p-4 mt-6 midi:px-8 semi-max:px-12'>
    <h1 className="text-white text-xl capitalise">{movieCategory}</h1>
        <div className="row-container relative flex gap-2 overflow-x-scroll overflow-y-hidden midi:gap-3">
            {movies && movies.map(movie => (
                <div className="wrapper block basis-[160px] grow-0 shrink-0 h-[130px] semi-midi:basis-[200px] semi-midi:h-[160px] midi:basis-[250px] midi:h-[200px] semi-max:basis-[280px] semi-max:h-[210px]" key={movie.id} >
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} key={movie.id} alt="" className="relative w-full h-[100px] semi-midi:h-[130px] midi:h-[170px]"/>
                    <p className="text-white text-center mt-2 text-sm">{movie?.title || movie?.name}</p>
                    </div>
        ))}
        </div>
    </div>
  )
}

export default Row
