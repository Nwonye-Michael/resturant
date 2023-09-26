import React, { useState, useRef } from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants/index"
import "./Intro.css"

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()
  const handleVideo = () => {
    const overlay = document.querySelector(".app__video-overlay")
    setPlayVideo((prev) => !prev)
    if (playVideo) {
      overlay.classList.remove("overlay-hidden")
      vidRef.current.pause()
    } else {
      setTimeout(
        () => {
          overlay.classList.add("overlay-hidden")
          vidRef.current.play()
        },

        400
      )
    }
  }
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro
