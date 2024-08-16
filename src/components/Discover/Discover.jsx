import React from 'react'
import './Discover.scss'

const Discover = (dis) => {
  return (
    <div className='discover'>
        <img src={dis.src} alt="photo" />
        <b>{dis.title}</b>
        <p>{dis.content}</p>
    </div>
  )
}

export default Discover