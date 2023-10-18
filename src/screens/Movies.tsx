import React, {useState, useEffect}  from 'react'
import Poster from '../components/Poster'
import Row from '../components/Row'
import requests from '../request'
const Movies = () => {
 

  return (
    <div className="bg-gray-300 h-auto pb-6">
        <Poster />
        <Row fetchUrl={requests.fetchTopRated} movieCategory="Top Rated"/>
        <Row fetchUrl={requests.fetchTrending} movieCategory="Trending Movies"/>
        <Row fetchUrl={requests.fetchActionMovies} movieCategory="Action Movies"/>
        <Row fetchUrl={requests.fetchRomanceMovies} movieCategory="Romance Movies"/>
        <Row fetchUrl={requests.fetchComedyMovies} movieCategory="Comedy movies"/>
        <Row fetchUrl={requests.fetchHorrorMovies} movieCategory="Horror Movies"/>
        <Row fetchUrl={requests.fetchDocumentaries} movieCategory="Documentaries"/>
        <Row fetchUrl={requests.fetchNetflixOriginals} movieCategory="Netflix Originals"/>
        <div className="text-white text-center mt-10 mx-auto px-4 midi:w-[600px] semi-max:w-[700px]">
            <h1 className="text-3xl font-semibold semi-max:text-4xl">There's even more to Watch</h1>
            <p className="text-lg mt-3 semi-max:text-xl">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            <button className="bg-red text-center w-full mt-2 py-3 uppercase semi-midi:w-[300px]">join now</button>
        </div>
    </div>
  )
}

export default Movies
