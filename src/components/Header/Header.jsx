import React, { useState } from 'react'
import './Header.scss'
import { useInfoContext } from '../../context/infoContext'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const {handleLanguageChange, language, theme, toggleTheme} = useInfoContext()
    const [openlang, setOpenlang] = useState(false)
    const [burger, setBurger] = useState(false)
    const toggle = () => setOpenlang(!openlang)
    const toggleMenu = () => setBurger(!burger)
  return (
    <header className={theme === 'dark' ? "header" : "header-dark"}>
        {burger && 
            <div className="hamburger-bar">
                <div className="hamburger-menu">
                    <div className="close-btn">
                        <NavLink to='/' className="logo">
                            {theme === 'dark' ? <>
                                <img src="/images/logo1.png" alt="" />
                                <img className='logo-text' src="/images/logo2.png" alt="" />
                            </> : <>
                                <img src="/images/logo1.png" alt="" />
                                <img className='logo-text' src="/images/logo2.png" alt="" />
                            </>}
                            {/* HANYUBAN */}
                        </NavLink>
                        <button onClick={toggleMenu}>X</button>
                    </div>
                    <div className="options">
                        <div className="hamburger icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="contact">
                            <i className="fa-solid fa-headset"></i>
                        </div>
                        <div className="tel">
                            <NavLink to="tel:+998887070444">88 <b>707 04 44</b></NavLink>
                        </div>
                        {/* <button className="get-start">
                            Get started
                        </button> */}
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/">{language.header.about}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/">{language.header.home}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses">{language.header.contact}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses">{language.header.course}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/teachers">{language.header.gallary}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/teachers">{language.header.work}</NavLink>
                        </li>
                    </ul>
                    <div className="production" style={{textAlign: 'center'}}>
                        <div style={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
                            <Link>
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-telegram"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-tiktok"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-square-facebook"></i>
                            </Link>
                            <Link>
                                <i className="fa-brands fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
        <div className="container">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to='/' className="logo">
                            {theme === 'dark' ? <>
                                <img src="/images/logo-dark.png" alt="" />
                                <img className='logo-text' src="/images/logo-darc.png" alt="" />
                            </> : <>
                                <img src="/images/logo1.png" alt="" />
                                <img className='logo-text' src="/images/logo2.png" alt="" />
                            </>}
                        </NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/">{language.header.about}</NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/">{language.header.home}</NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/courses">{language.header.contact}</NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/courses">{language.header.course}</NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/teachers">{language.header.gallary}</NavLink>
                    </li>
                    <li className="nav-item none">
                        <NavLink to="/teachers">{language.header.work}</NavLink>
                    </li>
                </ul>
                <div className="options">
                    {/* <label className='none' htmlFor="search-inp">
                        <input type="search" id='search-inp' placeholder='Search' required/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </label> */}
                    <div className="change">
                    <div className="lang">
                            <div onClick={toggle} className="lang-img">
                                <img src={`./images/${localStorage.getItem('language')}.svg`} alt="" />
                            </div>
                        </div>
                        {openlang && <div className="box-lang">
                            <div className='lang' onClick={() => {toggle(); handleLanguageChange('en')}}>
                                <div className="lang-img">
                                    <img src="./images/en.svg" alt="" />
                                </div>
                                <b>English</b>
                            </div>
                            <div className='lang' onClick={() => {toggle(); handleLanguageChange('ru')}}>
                                <div className="lang-img">
                                    <img src="./images/ru.svg" alt="" />
                                </div>
                                <b>Русский</b>
                            </div>
                            <div className='lang' onClick={() => {toggle(); handleLanguageChange('uz')}}>
                                <div className="lang-img">
                                    <img src="./images/uz.svg" alt="" />
                                </div>
                                <b>O'zbek</b>
                            </div>
                            <div className='lang' onClick={() => {toggle(); handleLanguageChange('ja')}}>
                                <div className="lang-img">
                                    <img src="./images/ja.svg" alt="" />
                                </div>
                                <b>中国</b>
                            </div>
                        </div>}
                    </div>
                    <div className="light" onClick={toggleTheme}>
                        {theme !== 'light' ? <i className="fa-solid fa-sun"></i> :
                        <i className="fa-solid fa-moon"></i>}
                    </div>
                    <div className="contact none">
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <div className="tel none">
                        <NavLink to="tel:+998887070444">88 <b>707 04 44</b></NavLink>
                    </div>
                    {/* <button className="get-start none">
                        Get started
                    </button> */}
                <div className="hamburger" onClick={toggleMenu}>
                    <NavLink>
                        <i className="fa-solid fa-bars bar"></i>
                    </NavLink>
                </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header