import React from 'react'

import { GiSittingDog, GiCat, GiRabbit, GiHorseHead } from 'react-icons/gi'
import { MdMedicalServices, MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'
import { FaHandsHelping, FaHome } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'

import VideoEdit from './img/video-edit.mp4'

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
          <h3 className="heading-3">Animal Rescue </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < MdFamilyRestroom  className="feature__icon"/>
          <h3 className="heading-3">Adoption </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < FaHandsHelping  className="feature__icon"/>
          <h3 className="heading-3">Fostering </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < FaHome  className="feature__icon"/>
          <h3 className="heading-3">Rehome </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < MdVolunteerActivism  className="feature__icon"/>
          <h3 className="heading-3">Volunteering </h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          < BsBriefcaseFill
  className="feature__icon"/>
          <h3 className="heading-3">Careers </h3>
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
        <h3 className="heading-3">Happy Families</h3>
        <h4 className="heading-4">"Our home has been brighter ever since he came home"</h4>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
        </p>
        <button className="btn">Find your pet</button>
      </div>


    </div>
  )
}

export default Home