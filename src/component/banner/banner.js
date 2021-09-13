import React, { useEffect, useState } from 'react'
import { API_Key, imageUrl } from '../../constants/constant'
import axios from '../../axios'
import "./banner.css"

function Banner() {
    const [movie, setmovie] = useState()
    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_Key}&with_genres=99`).then((response)=>{
            console.log(response.data.results[0])
            setmovie(response.data.results[0])
        })
    }, [])
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
        className='banner'>
            <div className="content">
            <h1 className='title'>{movie ? movie.title:""}</h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>Mylist</button> 
                </div>
                <h1 className="description">{movie ? movie.overview:""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
