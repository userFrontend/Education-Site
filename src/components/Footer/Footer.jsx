import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useInfoContext } from '../../context/infoContext'

const Footer = () => {
  const {theme} = useInfoContext()
  return (
    <footer>
        <div className="container">
          <div className="link-footer">
            <div className="link-list">
              <ul>
                <li>
                  <b>Quick Links</b>
                </li>
                <li>
                  <Link>Why Choose Us</Link>
                </li>
                <li>
                  <Link>Category</Link>
                </li>
                <li>
                  <Link>Course Program</Link>
                </li>
                <li>
                  <Link>Testimonials</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Company</b>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Coreer</Link>
                </li>
                <li>
                  <Link>Events</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Support</b>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Call Center</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <b>Follow Us</b>
                </li>
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
                <li>
                  <Link>Instagram</Link>
                </li>
                <li>
                  <Link>YouTube</Link>
                </li>
              </ul>
            </div>
            <div className="input-link">
              <h3>Subscribe to Our Newsletter!</h3>
              <label htmlFor="subscribe">
                <input type="text" placeholder='your email address' required/>
                <button>Subscribe</button>
              </label>
            </div>
          </div>
          <div className="production">
            <Link to='/' className="logo">
                  <img src="/images/logo1.png" alt="" />
                  <img className='logo-text' src="/images/logo2.png" alt="" />
            </Link>
            <b>HANYUBAN 2023. All rights reserved.</b>
          </div>
        </div>
    </footer>
  )
}

export default Footer