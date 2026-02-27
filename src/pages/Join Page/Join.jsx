import TitleBar from "../../components/TitleBar.jsx";
import "./Join.css";
import brdimg from "../../assets/brdph.svg";
import grpimg from "../../assets/grpph.svg";
import {useEffect} from"react";

export default function Join() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
          else e.target.classList.remove("active"); 
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <main>
      <TitleBar title="Join Us" />
        <div className= "bx1 reveal">
          <div className="topBox">
              <h1>Immerse</h1>
              <h2>yourself in an environment full of talented individuals working together 
              towards a shared passion for cyber security! </h2>
          </div>
            <div className= "imgBox1">
              <img src= {brdimg} alt="board img"/>
            </div>
        </div>

        
      
      <div className="bx2 reveal">
          <div className ="bottomBox">
            <h1>Grow</h1>
            <h2>your skills and feed your interest while 
            participating in a welcoming community</h2>
          </div>
          <div className="bottomPBox">
              <img src= {grpimg} alt="board img" />
          </div>
      </div>
      

      <div className="bx3whskinny reveal">
        <h1> Join WiCyS today!  </h1>
        <h2>UIC: Our chapter of WiCys on campus for FREE  </h2>
        <h3>National Member: Annual Membership Fee</h3>
      </div>
      <div className="joinRow reveal">
      <button onClick={()=>window.location.href='https://tr.ee/xiblB3PHxi'} className="joingr">
      <h1>JOIN </h1>
      <h2>UIC CHAPTER</h2>
      </button>

      <button onClick={()=>window.location.href='https://womenincybersecuritywicys.my.site.com/registration/s/'} className="joinpu">
        <h1>BECOME A </h1>
        <h2>NATIONAL MEMBER</h2>
      </button>
      
      </div>
    </main>
  );
}
