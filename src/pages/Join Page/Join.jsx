import TitleBar from "../../components/TitleBar.jsx";
import "./Join.css";
import grpimg from "../../assets/pics/JoinUsPhotos/group.png"; 
import imgOne from "../../assets/pics/JoinUsPhotos/collage1.png"; 
import imgTwo from "../../assets/pics/JoinUsPhotos/collage2.png"; 
import imgThree from "../../assets/pics/JoinUsPhotos/collage3.png";
import imgFour from "../../assets/pics/JoinUsPhotos/collage4.png"; 

export default function Join() {
return (
    <main>
      <TitleBar title="Join Us" />
        
    <div className= "secOne">
        <img src= {grpimg} alt="group img"/>
        <h1>Immerse</h1>
        <h2>yourself in an environment full of talented individuals working together 
        towards a shared passion for cyber security! </h2>
    </div>

    <div className="secTwo">
        <div className="collage">
            <div className="rowOne">
                <img src= {imgOne}/>
                <img src= {imgTwo}/>
            </div>
            <div className="rowTwo">
                <img src= {imgThree}/>
                <img src= {imgFour}/>
            </div>
        </div>

        <h1>Grow</h1>
        <h2>your skills and feed your interest while 
        participating in a welcoming community</h2>
    </div>
    
    <div className="join">
        <div className="title"> Join WiCyS Today!</div>

        <button onClick={()=>window.location.href='https://tr.ee/xiblB3PHxi'} className="uChapter">
                <h1>UIC CHAPTER</h1>
        </button> 
        <h2>Our chapter of WiCyS on campus for FREE </h2>

        <button onClick={()=>window.location.href='https://www.wicys.org/'} className="nMembership">
            <h1>NATIONAL MEMBERSHIP</h1> 
        </button>
        <h2 className="lastIteam">Annual Member Fee</h2>
        
    </div>
    </main>
  );
}
