import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const time = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }
  useEffect(() => {
    time()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v4tdutj', 'template_ico0aor', form.current, '9rjKcYxXzBcAl0S-J')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
};


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hola soy Christian Vergara como ya sabes:) 
          tengo 23 años y vivo en La Ligua V región. 
          Si deseas ponerte en contacto conmigo envíame un mensaje, te responderé enseguida.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Envíar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Christian Vergara,
          <br />
          Chile,
          <br />
          La Ligua, V región <br />
          <span>christianvd99@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-32.449794, -71.231742]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[-32.449794, -71.231742]}>
              <Popup>:)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Contact