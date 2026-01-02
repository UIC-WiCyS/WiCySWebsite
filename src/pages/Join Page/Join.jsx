import TitleBar from "../../components/TitleBar.jsx";
import "./Join.css";
import brdimg from "../../assets/brdph.svg";
import grpimg from "../../assets/grpph.svg";

export default function Join() {
  return (
    <main>
      <TitleBar title="Join Us" />

      <div className="bx1">
          <div style={{textAlign: "left"}}>
            <h1>Immerse</h1>
            <h2>yourself in an environment full of talented individuals working together 
            towards a shared passion for cyber security! </h2>
          </div>
          <img src= {brdimg} alt="board img"/>
        </div>

      <div className="bx2">
        <div className ="text2">
          <h1>Grow</h1>
          <p>your skills and feed your interest while 
          participating in a welcoming community</p>
        </div>
            <img src= {grpimg} alt="board img" />
      </div>

      <div className="bx3whskinny">
        <h1> Join WiCyS today!  </h1>
        <p1>UIC: Our chapter of WiCys on campus for FREE
        National Member: Annual Membership Fee </p1>
      </div>

      <div class="joinRow">
      <div className="bxgr">
        <h1>JOIN </h1>
        <h2>UIC CHAPTER</h2>
      </div>

      <div className="bxpurp">
        <h1>BECOME A </h1>
        <h2>NATIONAL MEMBER</h2>
      </div>
      
      </div>
    </main>
  );
}
