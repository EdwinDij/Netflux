import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function RandomBg() {

    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [overview, setOverview] = useState("")


    const getConfigImg = () => {
        axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                console.log(res)
            })
    }
    getConfigImg()

    useEffect(() => {

        const getData = () => {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => {
                    const resultsData = res.data.results
                    console.log(resultsData)
                    const randomnb = Math.floor(Math.random() * resultsData.length)
                    console.log(randomnb)
                    setTitle(resultsData[randomnb].title)
                    setImg(resultsData[randomnb].backdrop_path)
                    setOverview(resultsData[randomnb].overview)
                })
        }
        getData()
    }, [])
    const url = "http://image.tmdb.org/t/p/original" + img;

    return (
        <div className='random-bg' style={{
            backgroundImage: `url(${url})`, 
        }}
        >
            <div className="text-section">
                <h2 className='random-title'>{title}</h2>
                <div className="description">
                    <p className='description-text'>{overview}</p>
                </div>
            </div>
        </div>
    )
}
