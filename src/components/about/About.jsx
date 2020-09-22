import React from "react";
import "./about.scss";

const About = () => {

  return (
      <div className='about'>
        <div className='about__container'>
          <h1 className='about__h1'>HEY FRIENDS! I'M LOOKING FOR FRONTEND DEVELOPER POSITION</h1>
          <p className='about__p1_mobile'>My stack is Javascript, React, Redux, HTML5, CSS, Sass, Webpack, Git, React-router-dom, Rest Api, Jest, npm, Babel, EsLint. 
          </p>
          <p className='about__p1_tablet'>My stack is Javascript, React, Redux, HTML5, CSS, Sass, Webpack, Git, React-router-dom, Rest Api, Jest, npm, Babel, EsLint.
          I'm looking for new job opportinity in FrontEnd Development in a cool team and wish to conquer new hights and improve own skills to become exellent FE developer and team player.
          </p>
          <button className='about__btn'><a className='about__a' href="#reg">Sing up now</a></button>
        </div>
      </div>
  )
}

export default About;