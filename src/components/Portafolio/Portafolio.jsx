import React from 'react';
import './Portafolio.scss';
import IMG1 from '../../assets/images/homepage.png';
import IMG2 from '../../assets/images/homepageferia.png';
import IMG3 from '../../assets/images/blackjacksc.png';
import IMG4 from '../../assets/images/quizapp.png';
import IMG5 from '../../assets/images/shorturl.png';
import IMG6 from '../../assets/images/ad-2.png';
import IMG7 from '../../assets/images/app.png';
import IMG8 from '../../assets/images/inicio.png';
import Loader from 'react-loaders';



const data = [ 
    {
        id: 1,
        image: IMG1,
        title: 'Almond Web Project',
        github: 'https://github.com/Chrisvd9/Almond-Web-Project',
        demo: 'http://34.234.77.210/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Feria Virtual Project',
        github: 'https://github.com/Chrisvd9/feria-virtual-projectv2',
        demo: ''
    },    
    {
        id: 3,
        image: IMG3,
        title: 'BlackJack',
        github: 'https://github.com/Chrisvd9/simple-blackjack-game',
        demo: 'https://chrisvd9.github.io/simple-blackjack-game/'
    },   
    {
        id: 4,
        image: IMG4,
        title: 'Quizapp',
        github: 'https://github.com/Chrisvd9/quizapp',
        demo: 'https://quizappchris.herokuapp.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Ushort',
        github: 'https://github.com/Chrisvd9/ShortUrls',
        demo: 'https://shorturls-production-fe26.up.railway.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Administrador de pacientes Vet',
        github: 'https://github.com/Chrisvd9/Administrador-de-pacientes-vet',
        demo: 'https://clinquant-granita-a7b6f4.netlify.app/'
    },
    {
        id: 7,
        image: IMG7,
        title: 'Administrador de gastos',
        github: 'https://github.com/Chrisvd9/Administrador-de-gastos',
        demo: 'https://bespoke-tulumba-ed6bd5.netlify.app/'
    },
    {
        id: 8,
        image: IMG8,
        title: 'Cotizador de criptomonedas',
        github: 'https://github.com/Chrisvd9/Cotizador-de-criptomonedas',
        demo: 'https://frolicking-pastelito-9bf01d.netlify.app/'
    },


]

const Portafolio = () => {
    return (
        <>
            <section id='portafolio'>
                <div className='container portafolio__container'>
                    {
                        data?.map(({id, image, title, github, demo}) => {
                            return (
                                <article className='portafolio__item'>  
                                <div className="portafolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portafolio__item-cta'>
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                            )
                        })
                    }
                </div>
            </section>
            <Loader type='ball-scale'/>    
        </>
    );
}

export default Portafolio;