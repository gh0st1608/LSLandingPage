import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {InfoMedia, FormFive} from '../../components';

const ContactTwo = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <Tab.Container  id="contactTab" defaultActiveKey='tabno1'>
        <Nav className="contact-tab-menu">
          <Nav.Link eventKey="tabno1">
            <span className="btn-img"><img src="images/contact/contact-1-1.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">LatamStrategy, Perú<br/></span>
            <span className="btn-text">18 Bayovar, SJL</span>
          </Nav.Link>
          <Nav.Link eventKey="tabno2">
            <span className="btn-img"><img src="images/contact/contact-1-2.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">LatamStrategy, Chile</span>
            <span className="btn-text">302 Jr Leyan, Talagante</span>
          </Nav.Link>
          <Nav.Link eventKey="tabno3">
            <span className="btn-img"><img src="images/contact/contact-1-3.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">LatamStrategy, Ecuador</span>
            <span className="btn-text">301 Estadio, Mendoza</span>
          </Nav.Link>
        </Nav>
        <Tab.Content>          
          <Tab.Pane eventKey="tabno1">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Dirección Oficina Peru</h3>                  
                  <p className="contact-box__text">.</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Número Celular y Correo"
                    info={<><a href="tel:+51944326929">+(51) 944326929</a><a href="mailto:info@latam-strategy.com">info@latam-strategy.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Nuestra Dirección"
                    info="18 Bayovar, SJL"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Horarios de Atención"
                    info="7:00am - 6:00pm ( Lun - Vie ) Sab, Dom & Feriados Cerrado"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Déjanos un mensaje</h3>
                  <p className="contact-box__text">Estamos preparados para ayudarte</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="tabno2">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Dirección Oficina Chile</h3>                  
                  <p className="contact-box__text">.</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Número Celular y Correo"
                    info={<><a href="tel:+51944326929">+(51) 944326929</a><a href="mailto:info@latam-strategy.com">info@latam-strategy.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Nuestra Dirección"
                    info="302 Jr Leyan, Talagante"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Horarios de Atención"
                    info="7:00am - 6:00pm ( Lun - Vie ) Sab, Dom & Feriados Cerrado"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Déjanos un mensaje</h3>
                  <p className="contact-box__text">Estamos preparados para ayudarte</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="tabno3">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Dirección Oficina Ecuador</h3>                  
                  <p className="contact-box__text">.</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Número Celular y Correo"
                    info={<><a href="tel:+51928317801">+(51) 928317801</a><a href="mailto:info@latam-strategy.com">info@latam-strategy.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Nuestra Dirección"
                    info="301 Estadio, Mendoza"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Horarios de Atención"
                    info="7:00am - 6:00pm ( Lun - Vie ) Sab, Dom & Feriados Cerrado"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Déjanos un mensaje</h3>
                  <p className="contact-box__text">Estamos preparados para ayudarte</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  </div>
);

export default ContactTwo;