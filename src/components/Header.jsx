import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

import logo from '../assets/images/logo512.png'

const mainNav = [
  {
    display: "Trang chủ",
    path: "/"
  },
  {
    display: "Sản phẩm",
    path: "/catalog"
  },
  {
    display: "Phụ kiện",
    path: "/accessories"
  },
  {
    display: "Liên hệ",
    path: "/contact"
  }
]

const Header = () => {

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const headerRef = useRef(null)

  function activeShrink() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('shrink')
    } else {
      headerRef.current.classList.remove('shrink')
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", activeShrink)
    return () => {
      window.removeEventListener("scroll", activeShrink)
    };
  }, []);

  const menuLeft = useRef(null)

  const menuToggle = () => menuLeft.current.classList.toggle('active')

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <FaBars />
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <FaWindowClose />
            </div>
            {
              mainNav.map((item, index) => (
                <div 
                  key={index} 
                  className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                  onClick={menuToggle}
                >
                  
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <FaSearch />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <FaShoppingBag />
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <FaUserAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header