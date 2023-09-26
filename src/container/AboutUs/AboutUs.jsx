import React from "react"

import "./AboutUs.css"
import { images } from "../../constants"
import { SubHeading } from "../../components"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          tempora officiis repudiandae blanditiis eum.
        </p>
        <button className="cutom__button" type="button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" className="" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          tempora officiis repudiandae blanditiis eum.
        </p>
        <button className="cutom__button" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
