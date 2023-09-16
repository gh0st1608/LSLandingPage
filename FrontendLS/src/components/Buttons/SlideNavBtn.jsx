import React from 'react';
import {Button} from '../';

const SlideNavBtn = ({slideParent})=> {
  
  const nextSlide = ()=> {
    slideParent.current.slickNext();
  }

  const prevSlide = ()=> {
    slideParent.current.slickPrev();
  } 
  
  return (
    <div className="sec-btns">
      <Button className="style4" onclick={prevSlide}><i className="far fa-arrow-left"/>Anterior</Button>
      <Button className="style4" onclick={nextSlide}>Siguiente<i className="far fa-arrow-right"/></Button>
    </div>
  );
}

export default SlideNavBtn;