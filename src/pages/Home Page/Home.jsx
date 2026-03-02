import {useEffect, useState} from "react"
import './Home.css'

import pic1 from "../../assets/pics/MainPage/Photo1.JPG"
import pic2 from "../../assets/pics/MainPage/Photo2.JPG"
import screen from "../../assets/pics/MainPage/screen.svg"
import pic3 from "../../assets/pics/MainPage/Photo3.svg"
import pic4 from "../../assets/pics/MainPage/Photo4.svg"
import zebra from "../../assets/pics/MainPage/zebra.svg"
import imanage from "../../assets/pics/MainPage/imanage.svg"
import tetris from "../../assets/pics/MainPage/tetris.svg";


const IMAGES = [pic1, pic2, pic3]

export default function Home() {

    useEffect(() => {
        const id = setInterval(() => {
            setI(n => (n + 1) % IMAGES.length)
        }, 2500)
        return () => clearInterval(id)
    }, [])
    return (
  
  <div className="Home">
  <div
    className="rectangle"
    style={{ backgroundImage: `url(${tetris})` }}
  >
    <div className="screen-wrapper">
      <img src={screen} alt="Screen frame" className="screen-img" />
      <div className="overlay-text">
        <h1>Women in<br/>Cybersecurity</h1>
        <h2>UIC</h2>
        <button>learn more</button>
      </div>
    </div>

    <section className="mission">
      <div className="mission-card">
        <img className="mission-img" src={pic3} alt="Team photo" />
      </div>

      <div className="mission-text">
        <h2>Our Mission</h2>
        <div className="mission-line"></div>
        <p>
          We are a group of individuals passionate about making a positive impact
          through collaboration, innovation and community.
        </p>
      </div>
    </section>
<section className="remember">
          <div className="remember-title">remember to</div>

          <div className="remember-grid">
            <div className="remember-card">
              <div className="remember-photo">
                <img src={pic1} alt="Empower" />
              </div>
              <div className="remember-word green">Empower!</div>
            </div>

            <div className="remember-card">
              <div className="remember-photo">
                <img src={pic4} alt="Connect" />
              </div>
              <div className="remember-word green">Connect!</div>
            </div>

            <div className="remember-card">
              <div className="remember-photo">
                <img src={pic2} alt="Grow" />
              </div>
              <div className="remember-word green">Grow!</div>
            </div>
          </div>
        </section>
        <section className="sponsors">
          <h2 className="sponsors-title">Meet our partners!</h2>
          <div className="sponsors-line" />

          <div className="sponsors-grid">
            <div className="partner-card">
              <img src={zebra} alt="Zebra" className="partner-logo" />
            </div>

            <div className="partner-card">
              <img src={imanage} alt="iManage" className="partner-logo" />
            </div>
          </div>
        </section>

      
      
    </div>
  </div>
)
  
}