import React from 'react'

import { GiSittingDog, GiCat, GiRabbit, GiHorseHead } from 'react-icons/gi'
import { MdMedicalServices, MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'
import { FaHandsHelping, FaHome } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { TbWeight } from 'react-icons/tb'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TbPaw } from 'react-icons/tb'

import VideoEdit from './img/video-edit.mp4'
import Dog02 from './img/dog-02.png'
import Dog03 from './img/dog-03.jpg'

function Home() {
  return (
    <div className="home">

      <header className="header-main">
        <h1 className="heading-primary heading-primary--header-main">
            <span className="heading-primary--main">
              Cozy Cuddles</span>
        </h1>
        <h2 className="heading-2">adopt a pet today</h2>
        <a href="#" className="btn btn--header-main">
            click me</a>
        <div className="header-main__icons">
          <GiSittingDog className="header-main__icon"/>
          <GiCat className="header-main__icon"/>
          <GiRabbit className="header-main__icon"/>
          <GiHorseHead className="header-main__icon"/>
        </div>
      </header> {/* Home Header End */}

      <section className="features">
        <div className="feature">
          < MdMedicalServices  className="feature__icon"/>
          <h3 className="heading-3 heading-3--feature">Animal Rescue </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < MdFamilyRestroom  className="feature__icon "/>
          <h3 className="heading-3 heading-3--feature">Adoption </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < FaHandsHelping  className="feature__icon"/>
          <h3 className="heading-3 heading-3--feature">Fostering </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < FaHome  className="feature__icon"/>
          <h3 className="heading-3 heading-3--feature">Rehome </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < MdVolunteerActivism  className="feature__icon"/>
          <h3 className="heading-3 heading-3--feature">Volunteering </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < BsBriefcaseFill 
            className="feature__icon"/>
          <h3 className="heading-3 heading-3--feature">Careers </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
      </section>

      <div className="story__videos">
        <video className="story__video" autoPlay loop muted>
          <source src={VideoEdit} type="video/mp4" />
        </video>
      </div>

      <div className="story__content">
        <h3 className="heading-3 heading-3--story">Happy Families</h3>
        <p className="story__text">"Our home has been happier ever since he came home with us"</p>
        {/* <button className="btn">Find your pet</button> */}
        <img className="story__img" src={Dog02} />
      </div>

      <section className="pets">
        <div className="pet">
          <img className="pet__image" src={Dog03}/>
          <div className="pet__name">
            Skittles</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw />Chihuahua</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 7 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 18 mo</div>
              <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
          <img className="pet__image" src={Dog03}/>
          <div className="pet__name">
            Skittles</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw />Chihuahua</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 7 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 18 mo</div>
              <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
          <img className="pet__image" src={Dog03}/>
          <div className="pet__name">
            Skittles</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw />Pug</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 7 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 18 mo</div>
            <button className="pet__button">Adopt me</button>
          </div>


      </section>


    </div>
  )
}

export default Home