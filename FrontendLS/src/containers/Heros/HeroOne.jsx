import React from 'react';
import Slider from 'react-slick';
import {Button} from '../../components';

const HeroOne = ()=> {   

  const HEROCONTENT = [
    {
      image: 'images/hero/hero-1-1.jpg',
      title: <>Mejores TI<span className="hero-innertext">Consiga la mejor Soluciónn 2023</span> <br/> Servicio y Solución 2023</>,
      text: 'Reutilizar de forma profesional la vinculación total intuitiva tras un intercambio de ideas oportuno. Coordinar de forma creíble una colaboración y un intercambio de ideas fiables después de catalizar el cambio.',
      btn1: {text: 'Acerca de', path: '/about'},
      btn2: {text: 'SEGUIR LEENDO',path: '/about'}
    },
    {
      image: 'images/hero/hero-1-2.jpg',
      title: <>ARRIBA<span className="hero-innertext">CONSULTA GRATUITA </span><br/> Soporte y Gestión</>,
      text: 'Reutilizar de forma profesional la vinculación total intuitiva tras un intercambio de ideas oportuno. Coordinar de forma creíble una colaboración y un intercambio de ideas fiables después de catalizar el cambio.',
      btn1: {text: 'Acerca de', path: '/about'},
      btn2: {text: 'SEGUIR LEENDO', path: '/about'}
    },
    {
      image: 'images/hero/hero-1-3.jpg',
      title: <>EQUIPO DE<span className="hero-innertext">INGENIEROS ALTAMENTE CUALIFICADOS</span><br/>LEYENDAS Y PROFESIONALES </>,
      text: 'Reutilizar de forma profesional la vinculación total intuitiva tras un intercambio de ideas oportuno. Coordinar de forma creíble una colaboración y un intercambio de ideas fiables después de catalizar el cambio.',
      btn1: {text: 'Acerca de', path: '/about'},
      btn2: {text: 'SEGUIR LEENDO',path: '/about'}
    }
  ];
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          arrows: false,
        }
      }
    ]
  };
  
  
  return (
    <Slider className="hero-layout1" {...settings}>
      {HEROCONTENT.map((slide, index) => (
        <div key={index}>
          <div className="hero-inner">
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div className="hero-bg background-image" style={{backgroundImage: `url(${slide.image})`}}></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-text">{slide.text}</p>
                <div className="hero-btns">
                  <Button path={slide.btn1.path}>{slide.btn1.text}<i className="far fa-arrow-right"/></Button>
                  <Button path={slide.btn2.path} className="style2">{slide.btn2.text}<i className="far fa-arrow-right"/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}    
    </Slider>
  );
}

export default HeroOne; 