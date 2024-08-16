import React from 'react'
import './Branches.scss'

const Branches = () => {
  return (
    <div className='container'>
      <div className="find-title">
        <b className="title">OUR EXPERT MENTOR</b>
        <h2>Learn from the Best to Become the Best</h2>
      </div>
      <div className="find">
        <div className="best-item">
          <div className="item">
            <b>James Anderson</b>
            <p>Digital Marketing Spesialist</p>
          </div>
          <div className="item-content">
            <p className='item-p'>With a decade of experience in the ever-evolving landscape of digital marketing, James brings practical insights and hands-on strategies to her courses.</p>
            <b><i className="fa-solid fa-circle-play"></i> 20 course</b>
          </div>
        </div>
        <div className="item">
          <b>Sarah Lawson</b>
          <p>UI/UX Designer</p>
        </div>
        <div className="item">
          <b>Arnold William</b>
          <p>Photographer</p>
        </div>
      </div>
      <div className="category-bottom">
        <button className='view-btn'>View More</button>
        <span></span>
        <div className="bottom-btn">
          <button><i className="fa-solid fa-arrow-left"></i></button>
          <button><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Branches 