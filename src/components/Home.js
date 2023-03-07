import React from 'react'

import { GiSittingDog, GiCat, GiRabbit, GiHorseHead } from 'react-icons/gi'
import { MdMedicalServices, MdFamilyRestroom, MdVolunteerActivism } from 'react-icons/md'
import { FaHandsHelping, FaHome } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { TbWeight } from 'react-icons/tb'
import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { TbPaw } from 'react-icons/tb'

import VideoEdit from './img/video-edit.mp4'
import Dog02 from './img/dog-02.png'
import Dog03 from './img/dog-03.jpg'
import Dog04 from './img/dog-04.jpeg'
import Dog05 from './img/dog-05.jpg'
import Dog06 from './img/dog-06.jpg'
import Dog07 from './img/dog-07.webp'
import Dog08 from './img/dog-08.jpg'
import Dog09 from './img/dog-09.jpg'
import Dog10 from './img/dog-10.jpg'
import Cat01 from './img/cat-01.jpg'
import Cat02 from './img/cat-02.webp'

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
            Prince</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Pug</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 10 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 10 mo</div>
              <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Being held</div>
              <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog04}/>
            <div className="pet__name">Scooby
            </div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Lab</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 15 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 12 mo</div>
              <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Naps</div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog05}/>
            <div className="pet__name">
            Zeus</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Chow Chow</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 50 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 20 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Neck rubs
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog06}/>
            <div className="pet__name">
            Trinket</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Poodle</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 25 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 18 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Hugs
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog07}/>
            <div className="pet__name">
            Bosco</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Beagle</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 12 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 10 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Toys
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Cat01}/>
            <div className="pet__name">
            Lawrence</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Norwegian</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 9 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 16 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Bird Watching
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog08}/>
            <div className="pet__name">
            Fergie</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> French Bulldog</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 10 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 8 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Playing
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Cat02}/>
            <div className="pet__name">
            Newman</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Manx</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 7 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 14 mo</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Cat Nip
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

          <div className="pet">
            <img className="pet__image" src={Dog10}/>
            <div className="pet__name">
            Daisy</div>
            <div className="pet__detail pet__detail--1">
              <TbPaw /> Husky</div>
            <div className="pet__detail pet__detail--2">
              <TbWeight /> 38 lbs</div>
            <div className="pet__detail pet__detail--3">
              <AiOutlineCalendar /> 2 years</div>
            <div className="pet__detail pet__detail--4">
              <AiOutlineHeart /> Walks
            </div>
            <button className="pet__button">Adopt me</button>
          </div>

      </section>


    </div>
  )
}

export default Home