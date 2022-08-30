import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoCV from '../../assets/images/logo-cv.png'
import LogoSub from '../../assets/images/logo_sub-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPortrait, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoCV} alt="logo"></img>
        <img className="sub-logo" src={LogoSub} alt="christian-vergara"></img>
      </Link>
      <nav>
        
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#2F2F2B" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#2F2F2B" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="portafolio-link"
          to="/portafolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#2F2F2B" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#2F2F2B" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/christian-vergara-dominguez-84061121b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#2F2F2B" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Chrisvd9"
          >
            <FontAwesomeIcon icon={faGithub} color="#2F2F2B" />
          </a>
        </li>
        <li>
            <a
            target="_blank"
            rel='noreferrer' 
            href="https://api.WhatsApp.com/send?phone=56936603892"
            >
              <FontAwesomeIcon icon={faWhatsapp} color="#2F2F2B"/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
