import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function CardLastest() {
    const [data, setData] = useState([])
    const url = "http://image.tmdb.org/t/p/w342"

    useEffect(() => {
        const upcomingMovie = () => {
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`)
                .then((res) => {
                    console.log(res.data)
                    const results = res.data.results
                    setData(results)
                })
        }
       upcomingMovie()
    }, [])

    const slideLeft = () => {
        var slider = document.getElementById('scrollX1')
        slider.scrollLeft = slider.scrollLeft - 720
    }

    const slideRight = () => {
        var slider = document.getElementById('scrollX1')
        slider.scrollLeft = slider.scrollLeft + 720
    }

    return (
        <div className='popular'>
            <h2 className='card-title'>Prochainement</h2>
            <div className="movies-card">
                <MdChevronLeft className='arrow' size={260} onClick={slideLeft} />
                <div className="card scroll" id='scrollX1' >
                    {data.map((movies, key) => {
                        return <div className="popular-card">
                            <img  className="card-img" src={url + movies.backdrop_path} alt={movies.title} />
                            <h3 className='popular-title'>{movies.title}</h3>
                        </div>
                    })}
                </div>
                <MdChevronRight  className='arrow' size={260} onClick={slideRight} />
            </div>
        </div>
    )
}
