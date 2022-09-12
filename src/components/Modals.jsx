import React from 'react'

export default function Modals({open, title, textM, img}) {
    if(!open) return null
    
  return (
    <div className='overlay'>
       <h1>{title}</h1>
       <p>{textM}</p>
       <img src={img} alt={title}/>
    </div>
  )
}
