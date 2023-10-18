import React, {useEffect, useState} from 'react';
import axios from '../axios';
import requests from '../request';
import {BsFillPlayFill} from "react-icons/bs"
import { BsPlus } from 'react-icons/bs';
import { signOutUser } from '../firebase';
import { useNavigate } from 'react-router-dom';
// const API_KEY = "e1f1354d178ec5020a7dcd4d9d61b768"

const Poster = () => {
  // const API_KEY = "e1f1354d178ec5020a7dcd4d9d61b768"
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const fetchedPoster = async() => {
     const request = await axios.get(requests.fetchNetflixOriginals)
     const res = request.data.results;
     setMovie(res[Math.floor(Math.random() * res.length - 1)])
  }
  const truncateDescription = (str, n) => {
    return ((str?.length > n) ? str.substring(0, n-1) + '...' : str)
  }  
  const logoutUser = () => {
    signOutUser();
    navigate('/login');
  }
  useEffect(() => {
    fetchedPoster()
  }, [])
  useEffect(() => {
    // console.log(movie)
  }, [movie])


  return (
    <>
       {movie &&
       <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center"}} className="w-full h-[75vh] relative object-contain bg-cover">
        <div style={{backgroundImage: "linear-gradient( to top, black , rgba(6, 6, 6, 0.237))"}} className="w-full h-full py-2 px-4 midi:px-8 semi-max:px-12">
           <div className="flex justify-between items-center">
              <img src="./images/logo2.png" alt="logo" className="w-10 h-10 ml-[-5px]"/>
              <div className="flex gap-2">
                 <button className="uppercase bg-red px-4 py-2 text-white text-xs">join now</button>
                 <button className="capitalize bg-black px-4 py-2 text-white text-xs border border-solid border-gray-200" onClick={logoutUser}>sign out</button>
              </div>
           </div>
           <div className="mt-32">
              <h1 className="text-white text-4xl">{movie.name}</h1>
              <div className=" mt-8 flex gap-2">
                <button className="flex justify-between items-center px-1.5 bg-gray-200 text-black"><span><BsFillPlayFill className="text-3xl"/></span><span className="text-lg capitalize">play</span></button>
                <button className="flex justify-between items-center px-1.5 bg-grey-200 text-white"><span><BsPlus className="text-3xl"/></span><span className="text-lg capitalize">My List</span></button>
              </div>
              <h3 className='text-white text-sm mt-4 semi-midi:w-[480px] semi-midi:text-base midi:text-lg'>
                    {truncateDescription(movie?.overview, 200)}
              </h3>
           </div>
        </div>
       </div>
       }
    </>

  )
}

export default Poster
