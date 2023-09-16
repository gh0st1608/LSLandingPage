import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  ProgressOne
} from '../../components';

const AboutTwo = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-5 col-xxl-auto mb-30 pb-20 pb-lg-0">
          <img src="images/skill/skill-1-1.jpg" alt="Skill"/>
        </div>
        <div className="col-lg-7 col-xxl-6 me-xl-auto">
          <SecSubTitle><i className="fas fa-bring-forward"/>Habilidades Empresariales en TI</SecSubTitle>
          <SecTitle className="h1">Conectando personas y construyendo tecnología</SecTitle>
          <p className="mb-4 pb-1">Potenciamos tu empresa empleando tecnología innovadora sin afectar el rubro de tu negocio ...</p>
          <ProgressOne title="Seguridad del Negocio" now={60}/>
          <ProgressOne title="Desarrollo de Carrera" now={88}/>
          <ProgressOne title="Innovación del Negocio" now={90}/>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTwo;