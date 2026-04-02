import { useEffect, useState } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";

import pic1 from "../../assets/pics/MainPage/Photo1.JPG";
import pic2 from "../../assets/pics/MainPage/Photo2.JPG";
import screen from "../../assets/pics/MainPage/screen.svg";
import pic3 from "../../assets/pics/MainPage/wicys_group_photo.png";
import pic5 from "../../assets/pics/MainPage/love-bug.png";
import pic4 from "../../assets/pics/MainPage/Photo4.svg";
import zebra from "../../assets/pics/MainPage/zebra.svg";
import imanage from "../../assets/pics/MainPage/imanage.svg";
import logicGate from "../../assets/pics/MainPage/logicGateLogo.svg";
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
      <div className="rectangle" style={{ backgroundImage: `url(${tetris})` }}>
        <div className="typingTitle">
          <ReactTyped strings={["Women in Cybersecurity @ UIC"]} typeSpeed={50} showCursor={true}/>
        </div>
        <div className="SecurityCam">
          <div className="cam-frame">
            {IMAGES.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Security frame ${idx + 1}`}
                className={`cam__img ${i === idx ? "is-active" : ""}`}
                aria-hidden={i !== idx}
              />
            ))}

            <div className="cam-overlay" />
            <div className="cam-hud">
              <span className="rec">● REC</span>
              <span className="time">{time}</span>
            </div>
          </div>
        </div>

        <section className="mission">
          <div className="mission-card">
            <img className="mission-img" src={pic5} alt="Team photo" />
          </div>

          <div className="mission-text">
            <h2>Our Mission</h2>
            <div className="mission-line"></div>
            <p>
              We are a group of individuals passionate about making a positive
              impact through collaboration, innovation and community.
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
              <img src={logicGate} alt="LogicGate" className="partner-logo" />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}