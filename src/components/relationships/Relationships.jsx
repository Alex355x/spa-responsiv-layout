import React from "react";
import "./relationships.scss";

const Relationships = () => {

  return (
    <section className='relation'>
      <h1 className='relation__h1'>Let's get acquainted</h1>
      <div className='relation__float_svg'>
        <img className='picture-svg' src='man-laptop-v1.svg' alt="man-laptop-svg"></img>
        <div className='relation__container'>
          <h2 className='relation__h2'>I am cool frontend developer</h2>
          <p className='relation__p_part1'>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
          </p>
          <p className='relation__p_part2'>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.
          </p>
        <button className='relation__btn'><a className='relation__btn_a' href="#reg">Sing up now</a></button>
        </div>
      </div>
    </section>
  )
}

export default Relationships;