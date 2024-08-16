import React from 'react'
import './Teacher.scss'

const Teacher = () => {
  return (
    <div className='container'>
      <div className="course">
        <div className="media">
          <b className="title">WHY CHOOSE US</b>
          <h3>Discover the Distinct Advantages of Our Online Courses</h3>
        </div>
        <div className="img-course">
          <img src="./images/hero2.png" alt="photo" />
        </div>
        <div className='choose'>
        <div className="none">
          <b className="title">WHY CHOOSE US</b>
          <h3>Discover the Distinct Advantages of Our Online Courses</h3>
        </div>
        <div className="box-dives">
          <div className="diver">
            <img src="./images/icon1.png" alt="photo" />
            <b>Diverse Courses</b>
            <p>Explore a diverse range of courses tailored to your interests and career goals.</p>
          </div>
          <div className="diver">
            <img src="./images/icon2.png" alt="photo" />
            <b>Expert Instructors</b>
            <p>Learn from industry experts dedicated to your educational success.</p>
          </div>
          <div className="diver">
            <img src="./images/icon3.png" alt="photo" />
            <b>Flexible Schedule</b>
            <p>Learn at your own pace with flexible scheduling options to fit your busy lifestyle.</p>
          </div>
          <div className="diver">
            <img src="./images/icon4.png" alt="photo" />
            <b>Continuous Support</b>
            <p>Receive ongoing support and access additional resources for an enriching learning journey.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher