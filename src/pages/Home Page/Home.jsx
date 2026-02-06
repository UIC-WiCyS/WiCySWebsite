import {useEffect, useState} from "react"
import './Home.css'

import pic1 from "../../assets/pics/MainPage/Photo1.JPG"
import pic2 from "../../assets/pics/MainPage/cat.jpeg"
import screen from "../../assets/pics/MainPage/screen.svg"
import pic3 from "../../assets/pics/MainPage/Photo3.svg"


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
    <div className="rectangle">
      <div className="screen-wrapper">
        <img 
          src={screen}
          alt="Screen frame"
          className="screen-img"
        />
        <div className="overlay-text">
          <h1>Women in<br/>Cybersecurity</h1>
          <h2>UIC</h2>
          <button>learn more</button>
        </div>
        
        <section class="mission">
  <div class="mission-card">
    <img class="mission-img" src={pic3} alt="Team photo" />
  </div>

  <div class="mission-text">
    <h2>Our Mission</h2>
    <div class="mission-line"></div>
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
                <img src={pic1} alt="Connect" />
              </div>
              <div className="remember-word green">Connect!</div>
            </div>

            <div className="remember-card">
              <div className="remember-photo">
                <img src={pic1} alt="Grow" />
              </div>
              <div className="remember-word green">Grow!</div>
            </div>
          </div>
        </section>

      </div>
      
    </div>
  </div>
)

  

    
}