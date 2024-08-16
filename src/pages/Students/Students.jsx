import React from 'react'
import './Students.scss'
import MediaGrid from '../../components/VideoPage/MediaGrid'

const Students = () => {
  return (
    <div className='container'>
        <div className="students-box">
            <div className="students">
                <b className='title'>TESTIMONIALS</b>
                <h1>Unlocking Success Stories from Our Students</h1>
                <p>Discover the transformative journey of our students through their testimonials. These stories speak to the impact our courses have had on their professional and personal lives. 
                View More</p>
                <button className="view-btn">View More</button>
            </div>
            <div className="students-img">
                <MediaGrid src={'./images/IMG_5388.MOV'}/>
                <div className="box-image">
                    <img src="./images/img1.jpg" alt="photo" />
                    <img src="./images/img2.jpg" alt="photo" />
                    <img src="./images/img3.jpg" alt="photo" />
                    <img src="./images/img4.jpg" alt="photo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Students