import React from 'react';
import {Link} from 'react-router-dom';
import {
  InfoMedia, 
  Widget, 
  AboutWidget, 
  CategoryWidget, 
  RecentPostWidget, 
  IconLink
} from '../../components/';

// Widget Datas
import widgetsdata from '../../data/widgets.json';

const {pageList, exploreLinks, recentPosts} = widgetsdata;


const FooterOne = ()=> (
  <footer className="footer-wrapper footer-layout1 background-image" style={{backgroundImage: 'url(images/shape/bg-footer-1-1.jpg)'}}>
    <div className="footer-top">
      <div className="container">        
        <div className="row">        
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-map-marker-alt"
              title="Dirección Oficina"
              info="xxx"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-clock"
              title="Horario Oficina"
              info="Horarios: 8:00 am - 8:00 pm"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-phone-volume"
              title="Contáctanos"
              info={<>
                <a href="mailto:info@latam-strategy.com">info@latam-strategy.com</a>
                <br/>
                <a href="tel:+51944326929">+51XXXXXXXXX</a>
              </>}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">            
          <div className="col-md-6 col-xl-auto">
            <Widget widgetTitle="Nosotros" className="footer-widget">
              <AboutWidget>
                <AboutWidget.Text>Puedes encontrarnos por las diversas redes sociales actuales.</AboutWidget.Text>
                <IconLink className="footer-social">
                  <IconLink.Item icon="fab fa-facebook-f" path="/"/>
                  <IconLink.Item icon="fab fa-twitter" path="/"/>
                  <IconLink.Item icon="fab fa-behance" path="/"/>
                  <IconLink.Item icon="fab fa-youtube" path="/"/>
                  <IconLink.Item icon="fab fa-instagram" path="/"/>
                </IconLink>
              </AboutWidget>
            </Widget>
          </div>
          <div className="col-md-6 col-xl-auto">            
            <Widget widgetTitle="Novedades" className="footer-widget">
              {recentPosts.slice(0, 2).map(post => (
                <RecentPostWidget key={post.id}
                  title={post.title}
                  image={post.image}
                  date={post.date}
                />
              ))}
            </Widget>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">Copyright <i className="fal fa-copyright"/> 2022 <Link className="text-white" to="/">LatamStrategy</Link>. All rights reserved</p>
      </div>
    </div>    
  </footer>
);

export default FooterOne;