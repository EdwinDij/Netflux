import React from 'react'

export default function Modals({open}) {
    if(!open) return null
  return (
    <div className='overlay'>
        <div className="modal-container">aaa</div>
    </div>
  )
}
