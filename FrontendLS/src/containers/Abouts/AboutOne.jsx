import React from 'react';
import {
  Button, 
  ImageBoxOne, 
  SecTitle, 
  SecSubTitle, 
  InfoMedia
} from '../../components';

const AboutOne = ({className})=> (
  <div className={`position-relative ${className || ''}`}>    
    <div className="about-shape1 d-none d-xl-block">Latam Strategui Consulting Group</div>
    <div className="container z-index-common">        
      <div className="row gx-60">
        <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0">
          <ImageBoxOne imageOne="images/about/ab-1-1.jpg"
            imageTwo="images/about/ab-1-2.jpg"
            video="https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1"
          />
        </div>
        <div className="col-lg-6 col-xl-7 align-self-center">
          <SecSubTitle><i className="fas fa-bring-forward"/>Obtenga la mejor solución It 2023</SecSubTitle>
          <SecTitle className="h1">Confíe en nuestra mejor solución informática para su empresa</SecTitle>
          <p className="mb-4 mt-1 pb-3">Engranar de forma convincente portales multiplataforma mediante arquitecturas funcionales de capital humano de categoría mundial para iniciativas ortogonales. Comparar de forma asertiva los vectores de calidad visionarios con los minoristas electrónicos covalentes. Mejorar intrínsecamente los usuarios y el proceso de suministro 24 horas al día, 7 días a la semana.</p>
          <InfoMedia 
            image="images/icon/tel-1-1.png"
            title="SERVICIO 24 HORAS DISPONIBLE"
            info="Llámanos: +(666) 888 0000"
            className="call-media"
          />
          <Button path="/about">Sobre Nosotros <i className="far fa-long-arrow-right"/></Button>
        </div>
      </div>
    </div>    
  </div>
);

export default AboutOne;