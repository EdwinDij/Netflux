import React, { useState } from 'react'

export default function Header() {
    const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <div className='header'>
        <div className="header-title">
            <h1>Netflux</h1>
        </div>
        <div className="search-zone">
            <input type="text"/>
            <button className="search-btn">Rechercher</button>
        </div>
        <div className="user-bloc">
            <h2 className="user">{user}</h2>
        </div>
    </div>
  )
}
