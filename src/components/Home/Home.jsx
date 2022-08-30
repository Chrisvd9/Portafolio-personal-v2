import React, { useState, useEffect } from 'react'
import '../Layout/Layout.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'C',
    'h',
    'r',
    'i',
    's',
    't',
    'i',
    'a',
    'n',
    ' ',
    'V',
    'e',
    'r',
    'g',
    'a',
    'r',
    'a',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  const time = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }
  useEffect(() => {
    time()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Full-Stack JavaScript Developer / AWS Cloud Practitioner </h2>
          <Link to="/contact" className="flat-button">
            Contáctame
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Home
