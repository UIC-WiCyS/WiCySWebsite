import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import byteTheFlame from "../../assets/picsEvents/byteTheFlame.png";
import siliconValley from "../../assets/picsEvents/siliconvalley.png";
import thriftShop from "../../assets/picsEvents/thriftShop.png";
import gathersFundraiserMarch from "../../assets/picsEvents/gathersFundraiserMarch.png";
import wicysXaon from "../../assets/picsEvents/wicysXaon.png";
import BackButton from "../../components/BackButton.jsx";


import "./Mar.css"; 

export default function Mar() {
  return (
    <main className="mar-page">
      <TitleBar title="March Events" />

      <section className="mar-content">
        <BackButton />
        <h2>Welcome to March 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-passed">
            <img
            src={siliconValley}              
            alt="WiCyS Silicon Valley x WiCyS UIC x LOGICA"
            className="event-img"
          />
          <h2>WiCyS Silicon Valley x WiCyS UIC x LOGICA</h2>
          <p><strong>Date & Time:</strong> 3/2/26 </p>
          <p><strong>Location:</strong> CDRLC 1422, 5-7 PM </p>
          <p><strong>Details:</strong> Meet the Silicon Valley team! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={wicysXaon}              
            alt="Aon GRC event [AON X WiCyS]"
            className="event-img"
          />
          <h2>Aon GRC event</h2>
          <p><strong>Date & Time:</strong> 3/9/26, 5-6:30 PM </p>
          <p><strong>Location:</strong> SEL-East Room 2061 </p>
          <p><strong>Details:</strong> Aon partner!</p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/WiCyS-Aon-GRC.pdf" target="_blank">
                WiCyS Aon GRC Slides
              </a>
            </p>
  
        </div>
        <div className="event-card-passed">
            <img
            src={byteTheFlame}             
            alt="Byte the Flame"
            className="event-img"
          />
          <h2>Byte the Flame</h2>
          <p><strong>Date & Time:</strong> 3/11/26, 5-7 PM</p>
          <p><strong>Location:</strong> ARC 240 </p>
          <p><strong>Details:</strong> CTF!! </p>
          
  
        </div>
        {/* <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Pipe cleaner flower tutorial"
            className="event-img"
          />
          <h2>Pipe cleaner flower tutorial</h2>
          <p><strong>Date & Time:</strong> 3/18/26, 4-5 PM </p>
          <p><strong>Location:</strong> EIEP Lounge </p>
          <p><strong>Details:</strong> Come hang out and socialize! </p>
          
  
        </div> */}
        <div className="event-card-passed">
            <img
            src={gathersFundraiserMarch}             
            alt="Gathers Fundraiser"
            className="event-img"
          />
          <h2>Gathers Fundraiser</h2>
          <p><strong>Date & Time:</strong> 3/16/26, All day </p>
          <p><strong>Location:</strong> Gathers </p>
          <p><strong>Details:</strong> Support Wicys! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={thriftShop}             
            alt="Thrift & Coffee Fundraiser"
            className="event-img"
          />
          <h2>Thrift & Coffee Fundraiser</h2>
          <p><strong>Date & Time:</strong> 3/31/26, POSTPONED </p>
          <p><strong>Location:</strong> Quad </p>
          <p><strong>Details:</strong> Support Wicys by shopping and thrifting with us! </p>
          
  
        </div>
        </div>

      </section>
    </main>
  );
}
