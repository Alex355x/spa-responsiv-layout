import React from "react";
import "./relationships.scss";

const Relationships = () => {

  return (
    <section className='relation'>
      <h1 className='relation__h1'>Acquaintance</h1>
      <div className='relation__float_svg'>
        <img className='picture-svg' src='man-laptop-v1.svg' alt="man-laptop-svg"></img>
        <div className='relation__container'>
          <h2 className='relation__h2'>My aim - is to be a cool frontend developer</h2>
          <p className='relation__p_part1'>Over the last year I got experience  and strong  knowledges of fundamentals and popular techniques of HTML5/CSS, modern JavaScript(ES6+), React, React-router, Redux, Node Modules, Webpack, VSCode, Github, understanding RESTfull APIs. For today I'm looking for new job opportunity. I have strong desire to grow and develop in Frontend development and engineering.  I have Intermediate English level - both - write and speak. Ready to discuss your proposition.
          </p>
          
          <p className='relation__p_part2'>Other work experience: more 5 years as account manager in several companies (most of them were Startups) where I have deals with sales spare parts, different equipment, developing relationships with customers, customers support, helping to administrate websites..
          </p>
        <button className='relation__btn'><a className='relation__btn_a' href="#reg">Sing up now</a></button>
        </div>
      </div>
    </section>
  )
}

export default Relationships;