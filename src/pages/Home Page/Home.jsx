import { useEffect, useState } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";

import VantaBackground from "./VantaBackground.jsx"

import pic1 from "../../assets/pics/MainPage/Photo1.JPG";
import pic2 from "../../assets/pics/MainPage/Photo2.JPG";
import screen from "../../assets/pics/MainPage/screen.svg";
import pic3 from "../../assets/pics/MainPage/wicys_group_photo.png";
import pic5 from "../../assets/pics/MainPage/love-bug.png";
import pic4 from "../../assets/pics/MainPage/Photo4.svg";
import zebra from "../../assets/pics/MainPage/zebra.svg";
import imanage from "../../assets/pics/MainPage/imanage.svg";
import logicGate from "../../assets/pics/MainPage/logicGateLogo.png";
import tetris from "../../assets/pics/MainPage/tetris.svg";

const IMAGES = [pic1, pic2, pic3];

export default function Home() {
  const [i, setI] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % IMAGES.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <div className="Home">
      <div className="rectangle">
        <div className="landing">
          <div className="typingTitle">
            <ReactTyped strings={["WICYS @ UIC"]} typeSpeed={50} showCursor={true}/>
          </div>

          <div className="tagline">
            <p>
              Empowering the next generation of  <span style={{color:"#B1D34A", fontFamily: "VT323, monospace", fontSize: "40px", fontWeight:"bold"}}>cyber defenders</span>. 
            </p>
            <button className="learn-more">
              Learn More
            </button>
          </div>
        </div>


        <div className="pic-frame">
          {IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Security frame ${idx + 1}`}
              className={`cam__img ${i === idx ? "is-active" : ""}`}
              aria-hidden={i !== idx}
            />
          ))}

        </div>

        <section className="animated-bg">
          <div className="animated-box">
            <VantaBackground />
          </div>
        </section>

        <section className="mission">
          <div className="mission-card">
            <h1>OUR MISSION</h1>
            <p>“Recruit, retain, and advance women in cybersecurity.”</p>
            <p style={{color:"#C2CEAF", fontSize: "clamp(20px, 2vw, 18px)", textAlign: "left", padding:"0px 5vw"}}>— WiCyS National Mission</p>
          </div>

          <div className="mission-text">
            WiCyS @ UIC is the official student chapter of Women in CyberSecurity, a national nonprofit dedicated to bringing together women in cybersecurity from academia, government, and industry.
            <br /> <br />
            We believe that a diverse workforce makes security stronger. Our chapter creates space for students of all backgrounds to learn, compete, connect with professionals, and launch careers in cybersecurity.
          </div>
        </section>

        <section className="remember">
          <div className="remember-title">REMEMBER TO</div>

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
          <h2 className="sponsors-title">MEET OUR SPONSORS</h2>
          <div className="sponsors-line" />

          <div className="sponsors-grid">
            
            <div className="sponsors-card">
              <img src={logicGate} alt="LogicGate" className="sponsors-logo" />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}