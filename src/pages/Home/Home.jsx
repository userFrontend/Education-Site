import React, { useState } from 'react'
import './Home.scss'
import Course from '../Course/Course'
import Teacher from '../Teacher/Teacher'
import Branches from '../Branches/Branches'
import Students from '../Students/Students'
import { useInfoContext } from '../../context/infoContext'
import PhoneInput from '../../components/PhoneInput/PhoneInput'

const Home = () => {
  const {language} = useInfoContext()
  const [open, setOpen] = useState(false)
  return (
    <main>
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                   <div className='hero-img'>
                      <h1>{language.hero.title}</h1>
                      <p>Embark on a journey of knowledge and skill enhancement with our online courses. Whether you're looking to acquire new expertise or refine existing talents, our diverse range of courses offers a flexible and engaging learning experience. Empower yourself today!</p>
                      <button className='get-start' onClick={() => setOpen(!open)}>{language.hero.btn}</button>
                      {/* <button className='hero-btn'>Learn more <i className="fa-solid fa-circle-play"></i></button> */}
                      {/* <div className="students">
                        <div className="img-box">
                          <img src="./images/img1.jpg" alt="photo" />
                          <img src="./images/img2.jpg" alt="photo" />
                          <img src="./images/img3.jpg" alt="photo" />
                          <img src="./images/img4.jpg" alt="photo" />
                          <img src="./images/img5.jpg" alt="photo" />
                        </div>
                        <div>
                          <b>10K+ Student</b>
                          <p>have started their studies</p>
                        </div>
                      </div> */}
                   </div>
                   {/* <div className="hero-img">
                      <img src="./images/hero.png" alt="" />
                   </div> */}
                   {/* <div className="peoples">
                      <div className="count">
                        <h2>10K+</h2>
                        <p>Alumni</p>
                      </div>
                      <div className="count">
                        <h2>4.6</h2>
                        <p>5K+ Reviews</p>
                      </div>
                      <div className="count">
                        <h2>100+</h2>
                        <p>Portnerships</p>
                      </div>
                   </div> */}
                   
                   <div className={open ? 'contact' : 'contact none'}>
                    <form action="">
                      <div className="btn" onClick={() => setOpen(!open)}><i className='fa-solid fa-close'></i></div>
                    <h2>{language.input.info}</h2>
                    <p>{language.input.content}</p>
                      <input type="text" name="name" placeholder={language.input.phone}/>
                      <PhoneInput />
                      <button>{language.input.btn}</button>
                    </form>
                  </div>
                </div> 
            </div>
        </section>
        <section><Teacher/></section>
        <section><Course/></section>
        <section><Students/></section>
        <section><Branches/></section>
        <section>
          <div className="container">
            <div className="share">
              <div className="img-share">
                <img src="./images/end.png" alt="photo" />
              </div>
              <div className="content">
                <h1>Shape Minds, Share Knowledge: Become a Mentor Today!</h1>
                <button className="get-start">
                  Start Teaching Now
                </button>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Home