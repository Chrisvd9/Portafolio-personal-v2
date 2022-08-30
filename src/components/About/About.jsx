import { useState, useEffect } from 'react'
import '../Layout/Layout.scss'
import '../About/About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const time = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  useEffect(() => {
    time()
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'í']}
              idx={15}
            />
          </h1>
          <p>
            Desarrollador Full Stack y AWS Cloud Practitioner. Con una amplia
            gama de habilidades tecnológicas.
          </p>
          <p>
            Soy proactivo, eficaz, empático, amable, respetuoso y profesional en
            lo que hago.{' '}
          </p>
          <p>
            Mi objetivo es incorporarme a una empresa u organización, aportando
            mis conocimientos como desarrollador, y continuar aprendiendo nuevas
            tecnologías, para enfrentar los más diversos y desafiantes
            problemas.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#7952B3" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default About
