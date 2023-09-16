import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  InfoMedia,
  Button
} from '../../components';

const AboutSeven = ()=> (
  <div className="background-image" style={{backgroundImage: 'url(images/bg/about-bg-5-1.jpg)'}}>
    <div className="container container-style1">
      <div className="row flex-row-reverse align-items-center gx-70">
        <div className="col-lg-6 col-xl">
          <img src="images/about/ab-7-1.jpg" alt="aboutthumb"/>
        </div>
        <div className="col-lg-6 col-xl-auto">
          <div className="about-box2">
            <SecSubTitle><i className="fas fa-bring-forward"/>Obtenga la mejor solución It 2023</SecSubTitle>
            <SecTitle className="text-capitalize h1">Necesidades tecnológicas inspiradoras para las empresas</SecTitle>
            <p>Monetizar dinámicamente los procesos habilitados para la web a través de elementos de acción basados en el cliente. Crecer con autoridad objetivo está orientado mercados a través ompletamente generar contenido técnicamente sólido sin usuarios robustos.</p>
            <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
              <div className="col-sm-auto">
                <p className="author-degi">Fundador y CEO</p>
                <h3 className="h5 author-name">LATAM SCG</h3>
              </div>              
              <div className="col-sm-auto">
                <InfoMedia className="about-call"
                  icon="fas fa-phone-alt"
                  title="Call To Ask Any Queary"
                  info={<a href="tel:+25821562154">+(258) 2156 2154</a>}
                />
              </div>
            </div>
            <Button path="/service">Ordena sus servicios<i className="far fa-long-arrow-right"/></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSeven;