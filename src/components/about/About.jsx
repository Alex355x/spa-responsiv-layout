import React from "react";
import "./about.scss";

const About = () => {

  return (
      <div className='about'>
        <div className='about__container'>
          <h1 className='about__h1'>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</h1>
          <p className='about__p1_mobile'>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
          </p>
          <p className='about__p1_tablet'>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens.
          </p>
          <button className='about__btn'><a className='about__a' href="#reg">Sing up now</a></button>
        </div>
      </div>
  )
}

export default About;