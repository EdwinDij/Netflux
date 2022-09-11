import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function CardMovie() {
    const [data, setData] = useState([])
    const url = "http://image.tmdb.org/t/p/w342"

    useEffect(() => {
        const popularMovie = () => {
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`)
                .then((res) => {
                    console.log(res.data)
                    const results = res.data.results
                    setData(results)
                })
        }
        popularMovie()
    }, [])

    const slideLeft = () => {
        var slider = document.getElementById('scrollX')
        slider.scrollLeft = slider.scrollLeft - 720
    }

    const slideRight = () => {
        var slider = document.getElementById('scrollX')
        slider.scrollLeft = slider.scrollLeft + 720
    }

    return (
        <div className='popular'>
            <h2 className='card-title'>Les films populaires</h2>
            <div className="movies-card">
                <MdChevronLeft className='arrow' size={260} onClick={slideLeft} />
                <div className="card scroll" id='scrollX' >
                    {data.map((movies, key) => {
                        return <div className="popular-card">
                            <img src={url + movies.backdrop_path} alt={movies.title} />
                            <h3 className='popular-title'>{movies.title}</h3>
                        </div>
                    })}
                </div>
                <MdChevronRight  className='arrow' size={260} onClick={slideRight} />
            </div>
        </div>
    )
}
