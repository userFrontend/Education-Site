import React from 'react'
import './Course.scss'

const Course = () => {
  return (
    <div className='container'>
      <div className="course-list">
      <div className="category-title">
        <b className="title">COUSRSE CATEGORY</b>
        <h2>Explore Our Signature Courses</h2>
      </div>
      <div className="categorys">
        <div className="category">
          <h4 className='title'>40+ courses</h4>
          <b>Art and Creativity</b>
        </div>
        <div className="category">
          <h4 className='title'>30+ courses</h4>
          <b>Language and Communication</b>
        </div>
        <div className="category">
          <h4 className='title'>80+ courses</h4>
          <b>Technology and IT</b>
        </div>
        <div className="category">
          <h4 className='title'>80+ courses</h4>
          <b>Personal Development</b>
        </div>
      </div>
      <div className="category-bottom">
        <div><b className='active-num'>01</b>
        <b>/ 12</b></div>
        <span></span>
        <div className="bottom-btn">
          <button><i className="fa-solid fa-arrow-left"></i></button>
          <button><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Course