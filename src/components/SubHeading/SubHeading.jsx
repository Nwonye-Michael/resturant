import React from "react"

import { images } from "../../constants"

const SubHeading = ({ title }) => (
  <div className="app__subheading" style={{ marginBottom: "1rem" }}>
    <p className="p__coromorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
)

export default SubHeading
{
}
