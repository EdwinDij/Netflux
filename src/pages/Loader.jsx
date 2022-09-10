import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Loader() {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/main')
    }, 2000)
    return (
        <div className="body-loader">
            <div className="loading-bloc">
                <div className="lds-ring"><div></div><div></div><div></div><div></div>

                </div>
                <p className='loading'>Chargement...</p>
            </div>
        </div>

    )
}
