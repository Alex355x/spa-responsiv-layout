import React from "react";
import "./menu.scss";

const Menu = () => {

  return (
      <div className='menu'>
        <div className='menu__header'></div>
        <div className='menu__container'> 
          <div className='menu__title'><a href="#reg">About me</a></div>
          <div className='menu__title'>Relationships</div>
          <div className='menu__title'>Users</div>
          <div className='menu__title'>Sign Up</div>
          <div className='menu__title'>Terms and Conditions</div>
          <div className='menu__line'></div>
          <div className='menu__title'>How it works</div>
          <div className='menu__title'>Partnership</div>
          <div className='menu__title'>Help</div>
          <div className='menu__title'>Leave testimonial</div>
          <div className='menu__title'>Contact us</div>
          <div className='menu__line'></div>
          <div className='menu__title'>Articles</div>
          <div className='menu__title'>Our news</div>
          <div className='menu__title'>Testimonials</div>
          <div className='menu__title'>Licenses</div>
          <div className='menu__title'>Privacy Policy</div>
        </div>
      </div>
  )
}

export default Menu;