import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Modals from './Modals'

export default function CardLastest() {
    const [data, setData] = useState([])
    const [cardData, setCardData] = useState([])
    const [text, setText] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [title, setTitle] = useState("")
    const [isOpen, setIsOpen] = useState(false)
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
   
    const getCardInfo = (event) => {
        const element = event.currentTarget.children;
        const text = element[2].innerHTML
        const title = element[1].innerHTML
        const img = element[0].currentSrc
        console.log(element)
        console.log(text, title, img)
        setImgUrl(img)
        setText(text)
        setTitle(title)
        setIsOpen(true)
     }

    return (
        <div className='popular'>
            <h2 className='card-title'>Prochainement</h2>
            <div className="movies-card">
                <MdChevronLeft className='arrow' size={260} onClick={slideLeft} />
                <div className="card scroll" id='scrollX1' >
                    {data.map((movies, index) => {
                        return <div className="popular-card" >
                            <div id="cardTest" key={index} onClick={getCardInfo}>
                                <img className="card-img" id="img" src={url + movies.backdrop_path} alt={movies.title} />
                                <h3 className='popular-title' id="title"> {movies.title}</h3>
                                <p id="overview-card">{movies.overview} </p>
                            </div>
                        </div>
                    })}
                </div>
                <MdChevronRight className='arrow' size={260} onClick={slideRight} />
            </div>
            <Modals open={isOpen} title={title} img={imgUrl} textM={text} />
        </div>
    )
}
